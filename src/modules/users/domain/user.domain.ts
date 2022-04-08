import { IsString, IsEmail } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserDomain {
  @Field()
  @IsString()
  readonly _id!: string;

  @Field()
  @IsString()
  readonly first_name!: string;

  @Field()
  @IsString()
  readonly last_name!: string;

  @Field()
  @IsEmail()
  readonly email!: string;

  @Field()
  @IsString()
  readonly password!: string;

  @Field()
  @IsString()
  readonly created_at!: string;

  @Field()
  @IsString()
  readonly modified_at!: string;
}
