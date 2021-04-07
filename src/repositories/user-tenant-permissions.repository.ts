import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, BelongsToAccessor, repository} from '@loopback/repository';
import {
  UserTenants,
} from '../models';
import {PgdbDataSource} from '../datasources';
import {UserTenantPermissions, UserTenantPermissionsRelations} from '../models';
import {UserTenantsRepository} from './user-tenants.repository';

export class UserTenantPermissionsRepository extends DefaultCrudRepository<
  UserTenantPermissions,
  typeof UserTenantPermissions.prototype.id,
  UserTenantPermissionsRelations
> {
  public readonly userTenant: BelongsToAccessor<
  UserTenants,
  typeof UserTenantPermissions.prototype.id
  >;  
  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource,
    @repository.getter(UserTenantsRepository)
    utRepositoryGetter: Getter<UserTenantsRepository>,
  ) {
    super(UserTenantPermissions, dataSource);
    this.userTenant = this.createBelongsToAccessorFor(
      'user_tenant_id',
      utRepositoryGetter,
    );    
  }
}
