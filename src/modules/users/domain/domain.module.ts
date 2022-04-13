import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'modules/users/infrastructure/infrastructure.module';

@Module({
  exports: [],
  imports: [InfrastructureModule],
  providers: [],
})
export class DomainModule {}
