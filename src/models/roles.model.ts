import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'pgdb', table: 'roles'}}})
export class Roles extends Entity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  name?: string;

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
    type: 'string',
    postgresql: {columnName: 'permission', dataType: 'ARRAY', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  permission?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'role_key', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  roleKey?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Roles>) {
    super(data);
  }
}

export interface RolesRelations {
  // describe navigational properties here
}

export type RolesWithRelations = Roles & RolesRelations;
