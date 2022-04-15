import type { FilterQuery, Query } from 'mongoose';
// import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import type { User } from 'modules/users/infrastructure/mongoose/user.schema';
import { UserRepositoryImpl } from 'modules/users/infrastructure/repository/user.repository';
import { UserAssembler } from 'modules/users/application/assembler/user.assembler';
import { UserMapperService } from 'modules/users/infrastructure/mapper/user.mapper';
import type { IUserService } from 'modules/users/application/services/users';

@Injectable()
export class UserService implements IUserService<any> {
  @Inject()
  private readonly userMapper!: UserMapperService;

  @Inject()
  private readonly userAssembler!: UserAssembler;

  @Inject()
  private readonly userRepository!: UserRepositoryImpl;

  /* constructor(
    @Inject(User)
    private readonly userModel: Model<User>,
  ) {} */

  async update(id: Query<User>, input: Query<User>): Promise<User> {
    return this.userRepository.update(id, input);
  }

  async delete(id: Query<User>): Promise<User> {
    return this.userRepository.delete(id);
  }

  async create(input: Query<User>): Promise<User> {
    return this.userRepository.save(input);
  }

  async findOne(query: FilterQuery<User>): Promise<User[]> {
    return this.userRepository.findOne(query);
  }

  async find(): Promise<User[]> {
    console.log('find');
    return this.userRepository.find();
  }
}
