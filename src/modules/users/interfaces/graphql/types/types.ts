import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field((type) => Int)
  _id!: string;

  @Field()
  readonly first_name!: string;

  @Field()
  readonly last_name!: string;

  @Field()
  readonly email!: string;

  @Field()
  readonly password!: string;

  @Field()
  readonly created_at!: string;

  @Field()
  readonly modified_at!: string;
}
