/*eslint-disable*/
import { IsString, IsEmail } from 'class-validator';

export class UserDomain {
  @IsString()
  readonly fullName: string | undefined;

  @IsString()
  readonly password: string | undefined;

  @IsEmail()
  readonly email: string | undefined;
}
