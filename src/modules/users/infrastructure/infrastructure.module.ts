import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { UserRepositoryImpl } from 'modules/users/infrastructure/repository/user.repository';
import { userProviders } from 'modules/users/user.providers';
import { UserMapperService } from './mapper/user.mapper';

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
export class InfrastructureModule {}
