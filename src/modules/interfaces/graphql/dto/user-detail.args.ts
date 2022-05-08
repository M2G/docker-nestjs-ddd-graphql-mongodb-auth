/*eslint-disable*/
import { ArgsType, Field } from '@nestjs/graphql';
import { Min } from 'class-validator';
// import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export default class UserDetailQueryArg {
  @Field()
  @Min(1)
  _id!: string;
}
