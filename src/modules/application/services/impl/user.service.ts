import { Injectable, Inject } from '@nestjs/common';
import UserRepositoryImpl from 'modules/infrastructure/repository/user.repository';
import UserAssembler from 'modules/application/assembler/user.assembler';
import type IUserService from 'modules/application/services/users';
import type UserDto from 'modules/interfaces/graphql/types/user';
import type User from 'modules/domain/aggregate/user';

@Injectable()
export default class UserService implements IUserService<any> {
  @Inject()
  private readonly userAssembler!: UserAssembler;

  @Inject()
  private readonly userRepository!: UserRepositoryImpl;

  update(id: User, input: User): UserDto {
    const userDomainEntity = this.userRepository.update(id, input);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  delete(user: User): UserDto {
    console.log('UserService delete', user);
    const userDomainEntity = this.userRepository.delete(user);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  create(input: User): UserDto {
    const userDomainEntity = this.userRepository.save(input);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

   findOne(query: User): UserDto {
    const userDomainEntity = this.userRepository.findOne(query);

    console.log('findOne userDomainEntity', userDomainEntity);

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  find(options?: User): UserDto[] {
    console.log('UserService');
    const userDomainEntity = this.userRepository.find(options);
    return userDomainEntity?.map((user: UserDto) => this.userAssembler.applyDomainToDto(user));
  }
}
