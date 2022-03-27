import { Module } from '@nestjs/common';
import { UserService } from './service/impl/user';
import { DomainModule } from '../domain/domain.module';
import { UserAssembler } from './assembler/user.assembler';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  exports: [UserService, UserAssembler],
  imports: [DomainModule, InfrastructureModule],
  providers: [UserService, UserAssembler],
})
export class ApplicationModule {}
