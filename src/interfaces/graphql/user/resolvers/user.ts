/*eslint-disable*/
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserDetailQueryArg } from 'interfaces/graphql/user/dto/user-detail.args';
import { IUserService } from 'application/service/user';
import { Inject } from '@nestjs/common';
import { UserDto } from 'interfaces/graphql/user/types/user';
import { UserInput } from 'interfaces/graphql/user/dto/user-add.input';

@Resolver((of: any) => UserDto)
export class UserResolver {

    constructor(
        @Inject('UserService') private readonly userService: IUserService,
      ) {}

    @Query(returns => UserDto, {
        name: 'user',
    })
    async getUser(@Args() userDetailQuery: UserDetailQueryArg) {
        return await this.userService.findOneById(userDetailQuery);
    }

    @Mutation(returns => UserDto)
    async addUser(@Args('user') user: UserInput) {
        return await this.userService.add(user);
    }
}
