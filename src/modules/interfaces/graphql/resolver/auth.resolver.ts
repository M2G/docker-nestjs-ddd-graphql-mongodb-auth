import { Injectable, UseGuards } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import UserService from 'modules/application/services/impl/user.service';
import AuthService from 'modules/application/services/impl/auth.service';
import CreateUserInput from "modules/interfaces/graphql/dto/user-add.input";
import type UserDto from "modules/interfaces/graphql/types/user";
// import { CreateUserDto } from '../user/user.entity';
import LocalAuthGuard from "auth/shared/local-auth.guard";
import { LoginInput } from '../../../../graphql';

@Injectable()
export default class AuthResolver {
  public constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation()
  async signin(input: CreateUserInput): Promise<UserDto> {
    return this.userService.create(input);
  }

  @Mutation()
  @UseGuards(LocalAuthGuard)
  async login(input: LoginInput): Promise<string> {
    const { email, password } = input;
    return this.authService.validateAccount(email, password);
  }
}
