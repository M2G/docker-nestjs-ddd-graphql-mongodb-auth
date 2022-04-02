import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
// import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
// import { getORMConfig } from './ormconfig';
// eslint-disable-next-line import/namespace
import { GraphqlService } from './config/graphql/graphql.service';
import { TypeormService } from './config/typeorm/typeorm.service';
import { configuration } from './config/configuration';
// import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GraphqlService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),

    /* ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
        AuthModule,
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          resolverValidationOptions: {
            requireResolversForResolveType: false,
          }, */
    // typePaths: ['./**/*.graphql'],
    // }),
    UsersModule,
    // TypeOrmModule.forRoot(getORMConfig()),
  ],
  providers: [AppService],
})
export class AppModule {}
