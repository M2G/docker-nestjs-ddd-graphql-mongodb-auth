/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';
import type { UserDomain } from '../domain/user.domain';
import type { GetUserService } from '../interfaces/services/get.user.service.interface';

@Injectable()
export class GetUserServiceImpl implements GetUserService {
    public constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
    ) {}

    async getById(id: string): Promise<UserDomain | undefined> {
        return this.usersRepository.findOne({ userId: id });
    }

    async getByEmail(email: string): Promise<UserDomain | undefined> {
        return this.usersRepository.findOne({ email });
    }
}
