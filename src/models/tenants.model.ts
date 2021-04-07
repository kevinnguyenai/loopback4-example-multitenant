import {Entity, model, property} from '@loopback/repository';
import {UserModifiableEntity} from './user-modifiable-entity.model';
@model({settings: {idInjection: false, postgresql: {schema: 'pgdb', table: 'tenants'}}})
export class Tenants extends UserModifiableEntity {
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
    postgresql: {columnName: 'name', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  name?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'type', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  type?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'address1', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  address1?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'address2', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  address2?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'address3', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  address3?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'address4', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  address4?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'city', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  city?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'state', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  state?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'zip', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  zip?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'country', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  country?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'status', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  status?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tenants>) {
    super(data);
  }
}

export interface TenantsRelations {
  // describe navigational properties here
}

export type TenantsWithRelations = Tenants & TenantsRelations;
