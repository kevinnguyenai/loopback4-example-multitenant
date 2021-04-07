import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {
  Users, 
  UserDto,
  Tenants,
  UserTenants,
  UserTenantPermissions,   
} from '../models';
import {
  UsersRepository,
  TenantsRepository,
  RolesRepository,
  UserTenantPermissionsRepository,
  UserTenantsRepository,
} from '../repositories';

export class UserController {
  constructor(
    @repository(UsersRepository)
    public usersRepository : UsersRepository,
    @repository(TenantsRepository)
    public tenantsRepository: TenantsRepository,
    @repository(RolesRepository)
    public rolesRepository: RolesRepository,
    @repository(UserTenantsRepository)
    public utRepository: UserTenantsRepository,
    @repository(UserTenantPermissionsRepository)
    public utPermsRepository: UserTenantPermissionsRepository,    
  ) {}

  @post('/users')
  @response(200, {
    description: 'Users model instance',
    content: {'application/json': {schema: getModelSchemaRef(Users)}},
  })
  async create(@requestBody() userObj: UserDto): Promise<UserDto> {
    // Look for tenant in DB
    const tenantExists = await this.tenantsRepository.findOne({
      where: {
        name: userObj.tenant.name,
        type: userObj.tenant.type,
      },
    });
    if (tenantExists) {
      // Disallow addition of user into existing tenant
      throw new HttpErrors.BadRequest(`Tenant already exists.
      Please contact tenant admin to send you invite.`);
    }
    const roleExists = await this.rolesRepository.findOne({
      where: {
        name: userObj.role,
      },
    });
    if (!roleExists) {
      throw new HttpErrors.BadRequest(`Role name is invalid.`);
    }

    // Create tenant first
    const tenant = await this.tenantsRepository.create(
      new Tenants({
        name: userObj.tenant.name,
        type: userObj.tenant.type,
        status: 'active',
      }),
    );

    // Look for user in DB
    let userExists = await this.usersRepository.findOne({
      where: {
        username: userObj.username,
      },
    });
    if (!userExists) {
      // Create new user if does not exist
      const userModel = new Users({
        firstName: userObj.firstName,
        middleName: userObj.middleName,
        lastName: userObj.lastName,
        username: userObj.username,
        email: userObj.email,
        phone: userObj.phone,
        defaultTenant: tenant.id!,
      });
      userExists = await this.usersRepository.create(userModel);
    } else {
      // Map the new tenant with existing user
    }
    userObj.id = userExists.id;

    const userTenant = await this.utRepository.create(
      new UserTenants({
        roleId: roleExists.id,
        userId: userExists.id,
        tenantId: tenant.id,
        status: 'active',
      }),
    );
    userObj.tenant.id = tenant.id;

    if (userObj.permission && userObj.permission.length > 0) {
      const utPerms = userObj.permission.map(perm => {
        return new UserTenantPermissions({
          permission: perm.permission,
          allowed: perm.allowed,
          userTenantId: userTenant.id,
        });
      });
      await this.utPermsRepository.createAll(utPerms);
    }
    return userObj;
  }

  @get('/users/count')
  @response(200, {
    description: 'Users model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Users) where?: Where<Users>,
  ): Promise<Count> {
    return this.usersRepository.count(where);
  }

  @get('/users')
  @response(200, {
    description: 'Array of Users model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Users, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Users) filter?: Filter<Users>,
  ): Promise<Users[]> {
    return this.usersRepository.find(filter);
  }

  @patch('/users')
  @response(200, {
    description: 'Users PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {partial: true}),
        },
      },
    })
    users: Users,
    @param.where(Users) where?: Where<Users>,
  ): Promise<Count> {
    return this.usersRepository.updateAll(users, where);
  }

  @get('/users/{id}')
  @response(200, {
    description: 'Users model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Users, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Users, {exclude: 'where'}) filter?: FilterExcludingWhere<Users>
  ): Promise<Users> {
    return this.usersRepository.findById(id, filter);
  }

  @patch('/users/{id}')
  @response(204, {
    description: 'Users PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {partial: true}),
        },
      },
    })
    users: Users,
  ): Promise<void> {
    await this.usersRepository.updateById(id, users);
  }

  @put('/users/{id}')
  @response(204, {
    description: 'Users PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() users: Users,
  ): Promise<void> {
    await this.usersRepository.replaceById(id, users);
  }

  @del('/users/{id}')
  @response(204, {
    description: 'Users DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usersRepository.deleteById(id);
  }
}
