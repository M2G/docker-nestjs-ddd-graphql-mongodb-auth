import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { CreateUserServiceImpl } from './services/create.user.service';
import { User } from './domain/user.entity';
import { CreateUserApplicationImpl } from './applications/create.user.application';
import { TYPES } from './interfaces/types';
import { GetUserApplicationImpl } from './applications/get.user.application';
import { GetUserServiceImpl } from './services/get.user.service';
import { UserResolver } from './interfaces/graphql/resolver/user.resolver';

const createUserApp = {
  provide: TYPES.applications.CreateUserApplication,
  useClass: CreateUserApplicationImpl,
};
const getUserApp = {
  provide: TYPES.applications.GetUserApplication,
  useClass: GetUserApplicationImpl,
};

const createUserService = {
  provide: TYPES.services.CreateUserService,
  useClass: CreateUserServiceImpl,
};
const getUserService = {
  provide: TYPES.services.GetUserService,
  useClass: GetUserServiceImpl,
};

@Module({
  controllers: [UsersController],
  exports: [UserResolver, getUserService],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    createUserApp,
    getUserApp,
    createUserService,
    getUserService,
    UserResolver,
  ],
})
export class UsersModule {}
