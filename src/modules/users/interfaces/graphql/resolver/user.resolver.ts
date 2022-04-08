// src/user/user.resolver.ts
import {
 Args, Mutation, Resolver, Query,
} from '@nestjs/graphql';
import { UserService } from "modules/users/application/services/impl/user.service";
import { CreateUserInput } from 'modules/users/interfaces/graphql/dto/user-add.input';
import { User } from 'modules/users/infrastructure/mongoose/user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

   @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Query(() => [User])
  async users() {
    return this.userService.find();
  }
}
