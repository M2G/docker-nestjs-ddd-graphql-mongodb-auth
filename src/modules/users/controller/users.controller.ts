/*eslint-disable*/
import {
  Controller,
  Inject,
  Post,
  Body,
  UsePipes,
  Get,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserDomain } from 'modules/users/domain/user.domain';
import { TYPES } from 'modules/users/interfaces/types';
import { ValidationPipe } from 'common/validation.pipe';
import { GetUserApplication } from 'modules/users/interfaces/applications/get.user.application.interface';
import { CreateUserApplication } from 'modules/users/interfaces/applications/create.user.application.interface';

@Controller('users')
export class UsersController {
  public constructor(
    @Inject(TYPES.applications.CreateUserApplication)
    private readonly createUserApp: CreateUserApplication,
    @Inject(TYPES.applications.GetUserApplication)
    private readonly getUserApp: GetUserApplication,
  ) {}

  @UsePipes(new ValidationPipe(UserDomain))
  @Post()
  async create(@Body() userDomain: UserDomain): Promise<UserDomain> {
    const user = await this.createUserApp.create(userDomain);
    return user;
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<UserDomain | undefined> {
    const user = await this.getUserApp.getById(id);
    return user;
  }
}
