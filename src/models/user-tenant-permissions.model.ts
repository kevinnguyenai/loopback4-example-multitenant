import {Entity, model, property, belongsTo} from '@loopback/repository';
import {UserModifiableEntity} from './user-modifiable-entity.model';
import {UserTenants} from './user-tenants.model';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'pgdb', table: 'user_tenant_permissions'}
  }
})
export class UserTenantPermissions extends UserModifiableEntity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

  @belongsTo(
    () => UserTenants,
    {keyFrom: 'user_tenant_id', name: 'user_tenant_id'},
    {
      name: 'user_tenant_id',
      required: true,
    },
  )
  userTenantId?: number;

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
