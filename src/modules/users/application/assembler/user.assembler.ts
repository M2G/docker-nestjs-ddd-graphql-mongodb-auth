import { Injectable, Inject, forwardRef } from '@nestjs/common';
import type { User as UserEntity } from 'modules/users/infrastructure/entity/user.entity';
import { UserDto } from 'modules/users/interfaces/graphql/types/user';
import type { User } from 'modules/users/domain/aggregate/user';
import type { BaseAssembler } from './base.assembler';
// import { UserMapperService } from '../../infrastructure/mapper/user.mapper';

@Injectable()
export class UserAssembler implements BaseAssembler<UserEntity, User, UserDto> {

  /*
  @Inject()
  private readonly userMapper!: UserMapperService;

  @Inject(forwardRef(() => UserAssembler))
  private readonly userAssembler!: UserAssembler;
  */
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
