import {Entity, model, property} from '@loopback/repository';
import {BaseEntity} from './base-entity.model';

@model({
  settings: {idInjection: false, postgresql: {schema: 'pgdb', table: 'auth-clients'}}
})
export class AuthClients extends BaseEntity {
  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  id?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'client_id', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  clientId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'client_secret', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  clientSecret?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'redirect_url', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  redirectUrl?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'access_token_expiration', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  accessTokenExpiration?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'refresh_token_expiration', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  refreshTokenExpiration?: number;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'auth_code_expiration', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  authCodeExpiration?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'secret', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  secret?: string;

  @property({
    type: 'number',
    scale: 0,
    postgresql: {columnName: 'user_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES'},
  })
  userId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AuthClients>) {
    super(data);
  }
}

export interface AuthClientsRelations {
  // describe navigational properties here
}

export type AuthClientsWithRelations = AuthClients & AuthClientsRelations;
