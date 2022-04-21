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

  /*
  async findOneById(args: UserDetailQueryArg): Promise<UserDto> {
    const uid = args.id;
    const user = await this.userMapper.find(uid);
    return this.userAssembler.applyEntityToDto(user);
  }

  async add(user: UserInput): Promise<UserDto> {
    let userDomain = new User();
    userDomain = Object.assign({}, userDomain, user);
    const userDomainEntity = await this.userRepository.save(userDomain);
    const userDto = await this.userAssembler.applyDomainToDto(userDomainEntity);
    return userDto;
  }
   */

  async update(id: Query<User, any>, input: Query<User, any>): Promise<User> {
    return await this.userRepository.update(id, input);
  }

  async delete(id: Query<User, any>): Promise<User> {
    console.log('UserService delete', id);
    return await this.userRepository.delete(id);
  }

  async create(input: Query<User, any>): Promise<User> {
    const userDomainEntity = await this.userRepository.save(input);

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async findOne(query: FilterQuery<User>): Promise<User[]> {
    const userDomainEntity = await this.userRepository.findOne(query);

    console.log('findOne userDomainEntity', userDomainEntity)

    return this.userAssembler.applyDomainToDto(userDomainEntity);
  }

  async find(options?: any): Promise<User[]> {
    console.log('UserService');
    const userDomainEntity = await this.userRepository.find(options);

    return userDomainEntity?.map(async (user :User) => this.userAssembler.applyDomainToDto(user));
  }
}
