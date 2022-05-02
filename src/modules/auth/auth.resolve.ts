import { Injectable } from '@nestjs/common';
import { Mutation } from '@nestjs/graphql';
import { UserService } from 'modules/users/application/services/impl/user.service';
import { CreateUserInput } from "modules/users/interfaces/graphql/dto/user-add.input";
import { LoginInput } from '../../graphql';
// import { CreateUserDto } from '../user/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class AuthResolver {
    constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

    @Mutation()
    async signin(input: CreateUserInput): Promise<boolean> {
        return this.userService.create(input);
    }

    @Mutation()
    async login(input: LoginInput): Promise<string> {
        const { email, password } = input;
        return this.authService.validateAccount(email, password);
    }
}