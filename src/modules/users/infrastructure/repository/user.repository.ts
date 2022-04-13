import { Injectable, Inject } from '@nestjs/common';
import { UserConverter } from 'modules/users/infrastructure/converter/user.converter';
import type { UserRepository } from 'modules/users/domain/aggregate/repository/user.repository';
import type { User } from 'modules/users/domain/aggregate/user';
import { UserMapperService } from 'modules/users/infrastructure/mapper/user.mapper';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
    @Inject()
    private readonly userMapper!: UserMapperService;

    async find(id: number): Promise<User[]> {

      console.log('UserRepositoryImpl', id);

        const userEntity = await this.userMapper.findAll(id);

      console.log('UserRepositoryImpl userEntity ', userEntity);

       // const user = UserConverter.toDomain(userEntity);

      console.log('user user user ', userEntity);

        return userEntity;
    }

    async save(user: User): Promise<User> {
        const userEntity = UserConverter.toEntity(user);
        const inserted = await this.userMapper.add(userEntity);

        const res = UserConverter.toDomain(inserted);
        return res;
    }
}
