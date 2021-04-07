import {Model, model, property} from '@loopback/repository';
import {TenantDto} from './tenant-dto.model';
import {UserPermissionDto} from './user-permission-dto.model';

@model({settings: {}})
export class UserDto extends Model {
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
  firstName: string;

  @property({
    type: 'string',
  })
  middleName?: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  role?: string;

  @property({
    type: TenantDto,
    required: true,
  })
  tenant: TenantDto;

  @property.array(UserPermissionDto)
  permission?: UserPermissionDto[];


  constructor(data?: Partial<UserDto>) {
    super(data);
  }
}

export interface UserDtoRelations {
  // describe navigational properties here
}

export type UserDtoWithRelations = UserDto & UserDtoRelations;
