// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphqlService } from "./config/graphql/graphql.service";
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserService } from './modules/users/user.service';
// import { UserResolver } from './modules/users/user.resolver';
import { UserModule } from './modules/users/user.module';
import { userProviders } from './modules/users/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { UserResolver } from "./modules/users/interfaces/graphql/resolver/user.resolver";
import { UserService } from "./modules/users/services/user.service";

@Module({
  controllers: [AppController],
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GraphqlService,
    }),
    UserModule,
    DatabaseModule,
  ],
  providers: [
    AppService,

     UserService,
    // UserService,
    UserResolver,
    // UserResolver,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class AppModule {}
