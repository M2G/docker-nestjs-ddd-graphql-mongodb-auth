import { Module } from '@nestjs/common';
import { userProviders } from 'modules/user.providers';
import { databaseProviders } from 'database/database.providers';
import { DatabaseModule } from 'database/database.module';
import { ApplicationModule } from 'modules/application/application.module';
import { InterfacesModule } from 'modules/interfaces/interfaces.module';
import { DomainModule } from 'modules/domain/domain.module';

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
