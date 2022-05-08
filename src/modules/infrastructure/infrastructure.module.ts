import { Module } from '@nestjs/common';
import DatabaseModule from 'database/database.module';
import UserRepositoryImpl from 'modules/infrastructure/repository/user.repository';
import userProviders from 'modules/user.providers';
import UserMapperService from './mapper/user.mapper';

@Module({
  exports: [
    UserMapperService,
    UserRepositoryImpl,
    ...userProviders,
  ],
  imports: [
    DatabaseModule,
  ],
  providers: [
    UserMapperService,
    UserRepositoryImpl,
    ...userProviders,
  ],
})
export default class InfrastructureModule {}
