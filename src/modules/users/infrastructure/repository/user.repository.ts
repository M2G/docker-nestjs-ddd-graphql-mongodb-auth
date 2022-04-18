import { Injectable, Inject } from '@nestjs/common';
import { UserConverter } from 'modules/users/infrastructure/converter/user.converter';
import type { UserRepository } from 'modules/users/domain/aggregate/repository/user.repository';
import type { User } from 'modules/users/domain/aggregate/user';
import { UserMapperService } from 'modules/users/infrastructure/mapper/user.mapper';
import type { UserEntity } from 'modules/users/infrastructure/entity/user.entity';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  @Inject()
  private readonly userMapper!: UserMapperService;

  async findOne(id: number): Promise<User> {
    const userEntity: UserEntity = await this.userMapper.findOne(id);
    return UserConverter.toDomain(userEntity);
  }

  async find(options?: any): Promise<User[]> {
    const userEntity: UserEntity[] = await this.userMapper.find(options);
    return userEntity?.map((user: UserEntity) => UserConverter.toDomain(user));
  }

  async update() {}

  async delete() {}

  async save(user: User): Promise<User> {
    const userEntity = UserConverter.toEntity(user);
    const inserted = await this.userMapper.add(userEntity);

    const res = UserConverter.toDomain(inserted);
    return res;
  }
}
