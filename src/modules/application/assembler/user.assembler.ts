import { Injectable } from '@nestjs/common';
import type { UserEntity } from 'modules/infrastructure/entity/user.entity';
import { UserDto } from 'modules/interfaces/graphql/types/user';
import type { User } from 'modules/domain/aggregate/user';
import type { BaseAssembler } from './base.assembler';

@Injectable()
export class UserAssembler implements BaseAssembler<UserEntity, User, UserDto> {
  applyDomainToDto(user: User): UserDto {
    const userDto: any = new UserDto();
    return { ...userDto, ...user };
  }

  applyEntityToDto(userEntity: UserEntity): UserDto {
    const userDto: any = new UserDto();
    return { ...userDto, ...userEntity };
  }
}
