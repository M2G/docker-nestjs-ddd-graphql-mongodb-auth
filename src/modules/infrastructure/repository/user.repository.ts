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

  findOne(user: User): User {
    const userEntity: User = this.userMapper.findOne(user);
    return UserConverter.toDomain(userEntity);
  }

  find(options?: any): User[] {
    const userEntity: User[] = this.userMapper.find(options);
    return userEntity?.map((user: UserEntity) => UserConverter.toDomain(user));
  }

  update(_id: User, user: User) {
    console.log('update _id', _id);
    console.log('update user', user);
    // const userEntity: UserEntity = UserConverter.toEntity({ _id, ...user });
    const userEntity: UserEntity = this.userMapper.update(_id, user);
    console.log('update userEntity', userEntity);
    return UserConverter.toDomain(userEntity);
  }

  delete(_id: User): User {
    const user: User | null = this.userMapper.delete(_id);
    return UserConverter.toDomain(user);
  }

  save(user: User): User {
    const userEntity: UserEntity = UserConverter.toEntity(user);
    const inserted = this.userMapper.create(userEntity);
    const { _doc: res }: any = UserConverter.toDomain(inserted);
    return res;
  }
}
