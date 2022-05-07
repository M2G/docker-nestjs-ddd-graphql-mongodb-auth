import { Injectable, Inject } from '@nestjs/common';
import { UserConverter } from 'modules/infrastructure/converter/user.converter';
import type UserRepository from 'modules/domain/aggregate/repository/user.repository';
import type { User } from 'modules/domain/aggregate/user';
import { UserMapperService } from 'modules/infrastructure/mapper/user.mapper';
import type { UserEntity } from 'modules/infrastructure/entity/user.entity';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  @Inject()
  private readonly userMapper!: UserMapperService;

  async findOne(user: User): Promise<User> {
    const userEntity: UserEntity = await this.userMapper.findOne(user);
    return UserConverter.toDomain(userEntity);
  }

  async find(options?: any): Promise<User[]> {
    const userEntity: UserEntity[] = await this.userMapper.find(options);
    return userEntity?.map((user: UserEntity) => UserConverter.toDomain(user));
  }

  async update(_id: User, user: User) {
    console.log('update _id', _id);
    console.log('update user', user);
    // const userEntity: UserEntity = UserConverter.toEntity({ _id, ...user });
    const userEntity: UserEntity = await this.userMapper.update(_id, user);
    console.log('update userEntity', userEntity);
    return UserConverter.toDomain(userEntity);
  }

  async delete(_id: User): Promise<User> {
    const user: User = await this.userMapper.delete(_id);
    return UserConverter.toDomain(user);
  }

  async save(user: User): Promise<User> {
    const userEntity: UserEntity = UserConverter.toEntity(user);
    const inserted = await this.userMapper.create(userEntity);
    const { _doc: res }: any = UserConverter.toDomain(inserted);
    return res;
  }
}
