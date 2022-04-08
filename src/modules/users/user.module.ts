// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { UserResolver } from './interfaces/graphql/resolver/user.resolver';
import { UserService } from './application/services/impl/user.service';
import { userProviders } from './user.providers';

@Module({
  // exports: [getUserService, createUserService],
  imports: [
    DatabaseModule,
  ],
  providers: [
    UserResolver,
    UserService,
    ...userProviders,
  ],
})

export class UserModule {}
