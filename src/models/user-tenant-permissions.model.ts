import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'pgdb', table: 'user_tenant_permissions'}
  }
})
export class UserTenantPermissions extends Entity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'user_tenant_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  userTenantId?: number;

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
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'created_by', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  createdBy?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'modified_by', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  modifiedBy?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'deleted', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  deleted?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'permission', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  permission?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'allowed', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  allowed?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserTenantPermissions>) {
    super(data);
  }
}

export interface UserTenantPermissionsRelations {
  // describe navigational properties here
}

export type UserTenantPermissionsWithRelations = UserTenantPermissions & UserTenantPermissionsRelations;
