/*eslint-disable*/
import { Min } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class UserDetailQueryArg {
    @Field()
    @Min(1)
    id!: number;
}
