import { Injectable, Inject } from '@nestjs/common';
import type { User } from 'modules/infrastructure/mongoose/user.schema';
import { UserRepositoryImpl } from 'modules/infrastructure/repository/user.repository';
import { UserAssembler } from 'modules/application/assembler/user.assembler';
import type { IUserService } from 'modules/application/services/users';

@Injectable()
export class UserService implements IUserService<any> {
  @Inject()
  private readonly userAssembler!: UserAssembler;

  @Inject()
  private readonly userRepository!: UserRepositoryImpl;

  async update(id: any, input: any): Promise<User> {
    return this.userRepository.update(id, input);
  }

  async delete(user: any): Promise<any> {
    console.log('UserService delete', user);
    return this.userRepository.delete(user);
  }

  async create(input: any): Promise<User> {
    const userDomainEntity = await this.userRepository.save(input);

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async findOne(query: any): Promise<User[]> {
    const userDomainEntity = await this.userRepository.findOne(query);

    console.log('findOne userDomainEntity', userDomainEntity);

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async find(options?: any): Promise<User[]> {
    console.log('UserService');
    const userDomainEntity = await this.userRepository.find(options);

    return userDomainEntity?.map(async (user: User) => this.userAssembler.applyDomainToDto(user));
  }
}
