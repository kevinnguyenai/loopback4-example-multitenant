import {Model, model, property} from '@loopback/repository';

@model({settings: {}})
export class UserPermissionDto extends Model {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  permission: string;

  @property({
    type: 'boolean',
    required: true,
  })
  allowed: boolean;


  constructor(data?: Partial<UserPermissionDto>) {
    super(data);
  }
}

export interface UserPermissionDtoRelations {
  // describe navigational properties here
}

export type UserPermissionDtoWithRelations = UserPermissionDto & UserPermissionDtoRelations;
