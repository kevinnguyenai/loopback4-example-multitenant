import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, BelongsToAccessor, repository} from '@loopback/repository';
import {PgdbDataSource} from '../datasources';
import {Users, Roles, Tenants, UserTenants, UserTenantsRelations} from '../models';
import {TenantsRepository} from './tenants.repository'
import {UsersRepository} from './users.repository';
import {RolesRepository} from './roles.repository';

export class UserTenantsRepository extends DefaultCrudRepository<
  UserTenants,
  typeof UserTenants.prototype.id,
  UserTenantsRelations
> {
  public readonly tenant: BelongsToAccessor<Tenants,typeof UserTenants.prototype.id>;  
  public readonly user: BelongsToAccessor<Users, typeof UserTenants.prototype.id>;
  public readonly role: BelongsToAccessor<Roles, typeof UserTenants.prototype.id>;  
  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource,
    @repository.getter(TenantsRepository)
    tenantRepositoryGetter: Getter<TenantsRepository>,
    @repository.getter(UsersRepository)
    userRepositoryGetter: Getter<UsersRepository>,
    @repository.getter(RolesRepository)
    roleRepositoryGetter: Getter<RolesRepository>,

  ) {
    super(UserTenants, dataSource);
    this.tenant = this.createBelongsToAccessorFor(
      'tenant_id',
      tenantRepositoryGetter,
    );
    this.user = this.createBelongsToAccessorFor(
      'user_id',
      userRepositoryGetter,
    );
    this.role = this.createBelongsToAccessorFor(
      'role_id',
      roleRepositoryGetter,
    );    
  }
}
