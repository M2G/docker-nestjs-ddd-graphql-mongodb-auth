/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'modules/users/domain/user.entity';
import type { UserDomain } from 'modules/users/domain/user.domain';
import type { GetUserService } from 'modules/users/interfaces/services/get.user.service.interface';

@Injectable()
export class GetUserServiceImpl implements GetUserService {
    public constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
    ) {}

    async getById(id: string): Promise<UserDomain | undefined> {
      // @ts-ignore
        return this.usersRepository.findOne({ _id: id }) as any;
    }

    async getByEmail(email: string): Promise<UserDomain | undefined> {
        // @ts-ignore
      return this.usersRepository.findOne({ email }) as any;
    }
}
