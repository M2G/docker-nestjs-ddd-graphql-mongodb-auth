// src/user/user.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  _id!: string;

  @Field()
  first_name!: string;

  @Field()
  last_name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  created_at!: string;

  @Field()
  modified_at!: string;
}
