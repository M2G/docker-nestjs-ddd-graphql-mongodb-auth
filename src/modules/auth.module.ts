import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { GqlAuthGuard } from 'common/guards/gql-auth.guard';
import { JwtStrategy } from 'auth/jwt.strategy';
import { UsersModule } from './users.module';
import { ApplicationModule } from './application/application.module';
// import { SECRET_KEY } from '../../constant';
// import { UserModule } from '../user/user.module';
import { AuthResolver } from './interfaces/graphql/resolver/auth.resolver';
import { AuthService } from './application/services/impl/auth.service';

@Module({
  exports: [AuthService, GqlAuthGuard],
  imports: [
    UsersModule,

    ApplicationModule,

    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: 'secret' }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    GqlAuthGuard,
  ],
})

export class AuthModule {}
