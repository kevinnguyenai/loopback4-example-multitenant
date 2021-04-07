import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgdbDataSource} from '../datasources';
import {Tenants, TenantsRelations} from '../models';

export class TenantsRepository extends DefaultCrudRepository<
  Tenants,
  typeof Tenants.prototype.id,
  TenantsRelations
> {
  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource,
  ) {
    super(Tenants, dataSource);
  }
}
