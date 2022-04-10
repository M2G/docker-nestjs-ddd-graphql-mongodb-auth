import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database/database.module';
import { UserRepositoryImpl } from 'modules/users/infrastructure/repository/user.repository';
import { UserEntity } from 'modules/users/infrastructure/entity/user.entity';
import { userProviders } from '../user.providers';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './entity/user.entity';
import { UserMapperService } from './mapper/user.mapper';

@Module({
  exports: [
    UserMapperService,
    UserRepositoryImpl,
    UserEntity,
    ...userProviders,
  ],
  imports: [
    DatabaseModule,
    //  TypeOrmModule.forFeature([UserEntity, PostEntity])
  ],
  providers: [
    UserMapperService,
    UserRepositoryImpl,
    UserEntity,
    ...userProviders,
  ],
})
export class InfrastructureModule {}
