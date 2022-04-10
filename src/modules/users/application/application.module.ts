import { Module } from '@nestjs/common';
import { UserService } from 'modules/users/application/services/impl/user.service';
import { DomainModule } from '../domain/domain.module';
import { UserAssembler } from './assembler/user.assembler';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { UserMapperService } from "../infrastructure/mapper/user.mapper";
import { UserRepositoryImpl } from "modules/users/infrastructure/repository/user.repository";


@Module({
  exports: [UserService, UserAssembler, UserMapperService, UserRepositoryImpl],
  imports: [
    DomainModule, InfrastructureModule
  ],
  providers: [
    UserService, UserAssembler, UserMapperService, UserRepositoryImpl
  ],
})
export class ApplicationModule {}
