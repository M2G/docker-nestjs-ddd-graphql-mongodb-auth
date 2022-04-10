import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  exports: [],
  imports: [InfrastructureModule],
  providers: [],
})
export class DomainModule {}
