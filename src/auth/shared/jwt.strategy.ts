import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { SECRET_KEY } from '../../constant';
import { AuthService } from 'modules/application/services/impl/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    public constructor(private readonly authService: AuthService) {
        super({
          ignoreExpiration: false,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: any) {
        const user = await this.authService.validateUser(payload.userId);
        if (!user) {
            throw new UnauthorizedException();
        }
        // return user to ctx.req
        return user;
    }
}
