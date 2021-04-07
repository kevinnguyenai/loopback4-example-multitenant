import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'pgdb', table: 'user_tenants'}}
})
export class UserTenants extends Entity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'user_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  userId?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'tenant_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  tenantId?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'created_on', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  createdOn?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'modified_on', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  modifiedOn?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'deleted', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  deleted?: boolean;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'role_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  roleId?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'status', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  status?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserTenants>) {
    super(data);
  }
}

export interface UserTenantsRelations {
  // describe navigational properties here
}

export type UserTenantsWithRelations = UserTenants & UserTenantsRelations;
