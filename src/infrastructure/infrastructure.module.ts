import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserMapperService } from './mapper/user.mapper';
import { UserRepositoryImpl } from './repository/user.repository';

@Module({
  exports: [UserMapperService, UserRepositoryImpl],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserMapperService, UserRepositoryImpl],
})

export class InfrastructureModule {}
