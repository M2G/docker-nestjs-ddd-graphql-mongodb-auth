import { Module } from '@nestjs/common';
import { userProviders } from 'modules/users/user.providers';
import { databaseProviders } from 'database/database.providers';
import { DatabaseModule } from 'database/database.module';
import { ApplicationModule } from 'modules/users/application/application.module';
import { InterfacesModule } from 'modules/users/interfaces/interfaces.module';
import { DomainModule } from 'modules/users/domain/domain.module';

@Module({
  imports: [
    DomainModule,
    InterfacesModule,
    ApplicationModule,
    DatabaseModule,
  ],
  providers: [
    ...databaseProviders, ...userProviders,
  ],
})
export class UsersModule {}
