/*eslint-disable*/
import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from 'modules/application/services/impl/user.service';
import { CreateUserInput } from 'modules/interfaces/graphql/dto/user-add.input';
import { UserDetailQueryArg } from 'modules/interfaces/graphql/dto/user-detail.args';
import { User } from 'modules/infrastructure/mongoose/user.schema';
import { IUserService } from 'modules/application/services/users';
import { GqlAuthGuard } from "common/guards/gql-auth.guard";

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(
    @Inject(UserService) private readonly userService: IUserService<any>,
  ) {}

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserInput) {
    console.log('input input', input)
    return this.userService.create(input);
  }

  @Mutation(() => User)
  updateUser(
    @Args('input') input: CreateUserInput,
    @Args('id') id: UserDetailQueryArg,
  ) {
    console.log('input input', input)
    console.log('_id _id', id)
   // return await this.userService.update(_id, input);
  }

  @Query(() => User)
  async users() {
    return this.userService.find({});
  }

  @Query(() => User)
  getUser(@Args() userDetailQuery: UserDetailQueryArg) {
    console.log('userDetailQuery', userDetailQuery);
    return this.userService.findOne(userDetailQuery);
  }

  @Mutation(returns  => User)
  deleteItem(@Args() userDetailQuery: UserDetailQueryArg) {
    console.log('deleteItem', userDetailQuery);
    return this.userService.delete(userDetailQuery);
  }

}

