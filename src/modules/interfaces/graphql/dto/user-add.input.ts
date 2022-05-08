import { IsString, IsEmail } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class CreateUserInput {
  @Field()
  @IsString()
  first_name!: string;

  @Field()
  @IsString()
  last_name!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @IsString()
  password!: string;

  @Field()
  @IsString()
  created_at!: string;
}
