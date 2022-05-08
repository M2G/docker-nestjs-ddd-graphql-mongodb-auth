import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryImpl } from 'modules/infrastructure/repository/user.repository';
import { UserAssembler } from 'modules/application/assembler/user.assembler';
import type { IUserService } from 'modules/application/services/users';
import type { UserDto } from 'modules/interfaces/graphql/types/user';

@Injectable()
export class UserService implements IUserService<any> {
  @Inject()
  private readonly userAssembler!: UserAssembler;

  @Inject()
  private readonly userRepository!: UserRepositoryImpl;

  update(id: any, input: any): UserDto {
    const userDomainEntity = this.userRepository.update(id, input);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  delete(user: any): any {
    console.log('UserService delete', user);
    const userDomainEntity = this.userRepository.delete(user);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  create(input: any): UserDto {
    const userDomainEntity = this.userRepository.save(input);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

   findOne(query: any): UserDto {
    const userDomainEntity = this.userRepository.findOne(query);

    console.log('findOne userDomainEntity', userDomainEntity);

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  find(options?: any): UserDto[] {
    console.log('UserService');
    const userDomainEntity = this.userRepository.find(options);
    return userDomainEntity?.map((user: UserDto) => this.userAssembler.applyDomainToDto(user));
  }
}
