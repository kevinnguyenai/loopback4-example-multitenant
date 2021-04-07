import {Entity, model, property} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';

@model({settings: {idInjection: false, postgresql: {schema: 'pgdb', table: 'roles'}}})
export class Roles extends BaseEntity {
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
