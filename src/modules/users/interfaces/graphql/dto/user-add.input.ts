// src/user/user.input.ts
import { IsString, IsEmail } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  _id!: string;

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

  @Field()
  @IsString()
  modified_at!: string;
}
