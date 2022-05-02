import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'modules/users/users.module';
import { UserService } from 'modules/users/application/services/impl/user.service';
import { UserAssembler } from 'modules/users/application/assembler/user.assembler';
import { UserMapperService } from 'modules/users/infrastructure/mapper/user.mapper';
import { UserRepositoryImpl } from 'modules/users/infrastructure/repository/user.repository';
import { ApplicationModule } from 'modules/users/application/application.module';
import { GqlAuthGuard } from '../../common/guards/gql-auth.guard';
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
  providers: [AuthResolver, AuthService, JwtStrategy, GqlAuthGuard],
})
export class AuthModule {}
