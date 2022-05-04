/*eslint-disable*/
import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from 'modules/application/services/impl/user.service';
import { CreateUserInput } from 'modules/interfaces/graphql/dto/user-add.input';
import { UserDetailQueryArg } from 'modules/interfaces/graphql/dto/user-detail.args';
import { User } from 'modules/infrastructure/mongoose/user.schema';
import { IUserService } from 'modules/application/services/users';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject(UserService) private readonly userService: IUserService<any>,
  ) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    console.log('input input', input)
    return await this.userService.create(input);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('input') input: CreateUserInput,
    @Args('id') id: UserDetailQueryArg,
  ) {
    console.log('input input', input)
    console.log('_id _id', id)
   // return await this.userService.update(_id, input);
  }

  @Query(() => User)
  async users() {
    return await this.userService.find({});
  }

  @Query(() => User)
  async getUser(@Args() userDetailQuery: UserDetailQueryArg) {
    console.log('userDetailQuery', userDetailQuery);
    return await this.userService.findOne(userDetailQuery);
  }

  @Mutation(returns  => User)
  async deleteItem(@Args() userDetailQuery: UserDetailQueryArg) {
    console.log('deleteItem', userDetailQuery);
    return await this.userService.delete(userDetailQuery);
  }

}

