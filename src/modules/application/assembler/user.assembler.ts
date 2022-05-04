import { Injectable, Inject, forwardRef } from '@nestjs/common';
import type { User as UserEntity } from 'modules/infrastructure/entity/user.entity';
import { UserDto } from 'modules/interfaces/graphql/types/user';
import type { User } from 'modules/domain/aggregate/user';
import type { BaseAssembler } from './base.assembler';

@Injectable()
export class UserAssembler implements BaseAssembler<UserEntity, User, UserDto> {
  async applyDomainToDto(user: User): Promise<UserDto> {
    const userDto: any = new UserDto();
    return { ...userDto, ...user };
  }

  async applyEntityToDto(userEntity: UserEntity): Promise<UserDto | null> {
    if (!userEntity) return null;
    const userDto: any = new UserDto();
    return { ...userDto, ...userEntity };
  }
}
