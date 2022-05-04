import { Module } from '@nestjs/common';
import { UserService } from 'modules/application/services/impl/user.service';
import { UserRepositoryImpl } from 'modules/infrastructure/repository/user.repository';
import { InfrastructureModule } from 'modules/infrastructure/infrastructure.module';
import { UserMapperService } from 'modules/infrastructure/mapper/user.mapper';
import { DomainModule } from 'modules/domain/domain.module';
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
