import { Module } from '@nestjs/common';
import { UserService } from 'modules/users/application/services/impl/user.service';
import { UserRepositoryImpl } from 'modules/users/infrastructure/repository/user.repository';
import { InfrastructureModule } from 'modules/users/infrastructure/infrastructure.module';
import { UserMapperService } from 'modules/users/infrastructure/mapper/user.mapper';
import { DomainModule } from 'modules/users/domain/domain.module';
import { UserAssembler } from './assembler/user.assembler';

@Module({
  exports: [
    UserService,
    UserAssembler,
    UserMapperService,
    UserRepositoryImpl,
  ],
  imports: [DomainModule, InfrastructureModule],
  providers: [
    UserService,
    UserAssembler,
    UserMapperService,
    UserRepositoryImpl,
  ],
})
export class ApplicationModule {}
