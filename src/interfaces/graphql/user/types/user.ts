/*eslint-disable*/
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserDto {
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
