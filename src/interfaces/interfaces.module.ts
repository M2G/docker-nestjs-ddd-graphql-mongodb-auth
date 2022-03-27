import { Module } from '@nestjs/common';
import { ApplicationModule } from 'application/application.module';
import { UserResolver } from './graphql/user/resolvers/user';

@Module({
    imports: [ApplicationModule],
    providers: [UserResolver],
})
export class InterfacesModule {}
