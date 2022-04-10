import { Module } from '@nestjs/common';
import { ApplicationModule } from 'modules/users/application/application.module';
import { UserResolver } from './graphql/resolver/user.resolver';

@Module({
  imports: [ApplicationModule],
  providers: [UserResolver],
})
export class InterfacesModule {}
