/*eslint-disable*/
import { Injectable, Inject } from '@nestjs/common';
import type { UserDomain } from '../domain/user.domain';
import { TYPES } from 'modules/users/interfaces/types';
import { CreateUserService } from 'modules/users/interfaces/services/create.user.service.interface';
import type { CreateUserApplication } from 'modules/users/interfaces/applications/create.user.application.interface';

@Injectable()
export class CreateUserApplicationImpl implements CreateUserApplication {
    public constructor(
        @Inject(TYPES.services.CreateUserService)
        private readonly userService: CreateUserService,
    ) {}

    async create(user: UserDomain): Promise<UserDomain> {
        return this.userService.create(user);
    }
}
