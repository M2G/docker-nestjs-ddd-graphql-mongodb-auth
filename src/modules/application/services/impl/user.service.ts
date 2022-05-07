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

  async update(id: any, input: any): Promise<UserDto> {
    const userDomainEntity = await this.userRepository.update(id, input);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async delete(user: any): Promise<any> {
    console.log('UserService delete', user);
    const userDomainEntity = await this.userRepository.delete(user);
    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async create(input: any): Promise<UserDto> {
    const userDomainEntity = await this.userRepository.save(input);

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async findOne(query: any): Promise<UserDto> {
    const userDomainEntity = await this.userRepository.findOne(query);

    console.log('findOne userDomainEntity', userDomainEntity);

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async find(options?: any): Promise<UserDto[]> {
    console.log('UserService');
    const userDomainEntity = await this.userRepository.find(options);

    return userDomainEntity?.map(async (user: UserDto) => this.userAssembler.applyDomainToDto(user));
  }
}
