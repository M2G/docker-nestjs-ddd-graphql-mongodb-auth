import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
 import { TypeOrmModule } from '@nestjs/typeorm';
// import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { getORMConfig } from './ormconfig';
import { configuration } from './config/configuration';
import { AuthModule } from './modules/auth/auth.module';
// import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
        AuthModule,
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          resolverValidationOptions: {
            requireResolversForResolveType: false,
          },
            typePaths: ['./**/*.graphql'],
        }),
        UsersModule,
      TypeOrmModule.forRoot(getORMConfig()),
    ],
})
export class AppModule {}
