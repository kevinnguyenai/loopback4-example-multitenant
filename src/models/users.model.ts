import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'pgdb', table: 'users'}}})
export class Users extends Entity {
  @property({
    type: 'number',
    required: true,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'first_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  firstName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'middle_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  middleName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'last_name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  lastName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'username', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  username?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'email', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  email?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'phone', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  phone?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'password', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  password?: string;

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
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'default_tenant', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  defaultTenant?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_login', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  lastLogin?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
