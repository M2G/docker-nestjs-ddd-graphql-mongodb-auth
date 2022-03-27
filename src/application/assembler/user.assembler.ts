/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import type { UserEntity } from 'infrastructure/entity/user.entity';
import { UserDto } from 'interfaces/graphql/user/types/user';
import type { User } from 'domain/aggregate/user/user';
import type { BaseAssembler } from './base.assembler';

@Injectable()
export class UserAssembler implements BaseAssembler<UserEntity, User, UserDto> {
    async applyEntityToDto(userEntity: UserEntity): Promise<UserDto | any> {
        if (!userEntity) {
            return null;
        }
        let userDto = new UserDto();
        userDto = { ...userDto, ...userEntity};
        console.log('userDto', userDto);
        return userDto;
    }

  async applyDomainToDto(user: User): Promise<UserDto> {
    let userDto = new UserDto();
    userDto = Object.assign({}, userDto, user);
    return userDto;
  }
}
