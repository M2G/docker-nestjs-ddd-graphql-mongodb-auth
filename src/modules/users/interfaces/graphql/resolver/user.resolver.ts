/*eslint-disable*/
import {
 Resolver, Query, Args, ID, Mutation,
} from '@nestjs/graphql';
import { Inject, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/common/validation.pipe';
import { UserDomain } from 'src/modules/users/domain/user.domain';
import { TYPES } from 'src/modules/users/interfaces/types';
import { CreateUserApplication } from 'src/modules/users/interfaces/applications/create.user.application.interface';
import { GetUserApplication } from 'src/modules/users/interfaces/applications/get.user.application.interface';

@Resolver('User')
export class UserResolver {
    public constructor(
        @Inject(TYPES.applications.CreateUserApplication)
        private readonly createUserApp: CreateUserApplication,
        @Inject(TYPES.applications.GetUserApplication)
        private readonly getUserApp: GetUserApplication,
    ) {}

    @Query(() => UserDomain, { name: 'userById' })
    async getUserById(
        @Args('id', { type: () => ID }) userId: string,
    ): Promise<UserDomain | undefined> {
        return this.getUserApp.getById(userId);
    }

    @UsePipes(new ValidationPipe(UserDomain))
    @Mutation(() => String, { name: 'createUser' })
    async create(@Args('user') { ...user }: UserDomain): Promise<UserDomain> {
        return this.createUserApp.create(user);
    }
}
