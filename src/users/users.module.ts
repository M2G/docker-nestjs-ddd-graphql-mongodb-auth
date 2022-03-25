import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { User } from './domain/user.entity';
import { USER_TYPES } from './interfaces/types';
import { GetAllUserService } from './services/get.all.user.service';
import { GetAllUserApplication } from './applications/get.all.user.application';

const getAllUserApp = {
  provide: USER_TYPES.applications.IGetAllUserApplication,
  useClass: GetAllUserApplication,
};
const getAllUserService = {
  provide: USER_TYPES.services.IGetAllUserService,
  useClass: GetAllUserService,
};

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [getAllUserApp, getAllUserService],
})
export class UsersModule {}
