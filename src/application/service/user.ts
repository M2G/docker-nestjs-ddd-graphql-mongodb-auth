/*eslint-disable*/
import type { UserDetailQueryArg } from 'interfaces/graphql/user/dto/user-detail.args';
import type { UserDto } from 'interfaces/graphql/user/types/user';
import type { UserInput } from 'interfaces/graphql/user/dto/user-add.input';

export interface IUserService {

    findOneById: (userDetailQuery: UserDetailQueryArg) => Promise<UserDto>;

    add: (user: UserInput) => Promise<UserDto>;
}
