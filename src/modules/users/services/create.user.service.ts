import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'modules/users/domain/user.entity';
import type { UserDomain } from 'modules/users/domain/user.domain';
import type { CreateUserService } from 'modules/users/interfaces/services/create.user.service.interface';

@Injectable()
export class CreateUserServiceImpl implements CreateUserService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
    ) {}

    async create(user: UserDomain): Promise<UserDomain> {
        return this.usersRepository.save(user);
    }
}
