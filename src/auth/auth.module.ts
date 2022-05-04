import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'modules/users.module';
import { ApplicationModule } from 'modules/application/application.module';
import { GqlAuthGuard } from 'common/guards/gql-auth.guard';
// import { SECRET_KEY } from '../../constant';
// import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolve';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

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
