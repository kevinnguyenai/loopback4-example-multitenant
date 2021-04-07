import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgdbDataSource} from '../datasources';
import {AuthClients, AuthClientsRelations} from '../models';

export class AuthClientsRepository extends DefaultCrudRepository<
  AuthClients,
  typeof AuthClients.prototype.id,
  AuthClientsRelations
> {
  constructor(
    @inject('datasources.pgdb') dataSource: PgdbDataSource,
  ) {
    super(AuthClients, dataSource);
  }
}
