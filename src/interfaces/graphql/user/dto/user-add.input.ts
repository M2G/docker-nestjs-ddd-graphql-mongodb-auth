/*eslint-disable*/
import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {
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
