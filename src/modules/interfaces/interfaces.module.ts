import { Module } from '@nestjs/common';
import { ApplicationModule } from 'modules/application/application.module';
import { UserResolver } from './graphql/resolver/user.resolver';

@Module({
  imports: [ApplicationModule],
  providers: [UserResolver],
})
export class InterfacesModule {}
