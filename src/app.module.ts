import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { ORMConfig } from './ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphqlService } from './config/graphql/graphql.service';
import { TypeormService } from './config/typeorm/typeorm.service';

@Module({
  imports: [
    // UsersModule, TypeOrmModule.forRoot(ORMConfig),
    GraphQLModule.forRootAsync({
      useClass: GraphqlService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
  ],
})
export class AppModule {}
