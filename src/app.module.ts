import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphqlService } from 'config/graphql/graphql.service';
import { UsersModule } from "modules/users.module";
import { AuthModule } from "auth/auth.module";
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({ envFilePath: ['../.env'], isGlobal: true }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GraphqlService,
    }),

    AuthModule,
    UsersModule,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
