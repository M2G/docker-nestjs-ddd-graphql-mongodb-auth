import type { Document } from 'mongoose';

import type { UserDetailQueryArg } from 'modules/users/interfaces/graphql/dto/user-detail.args';
import type { UserDto } from 'modules/users/interfaces/graphql/types/user';
import type { CreateUserInput } from 'modules/users/interfaces/graphql/dto/user-add.input';

export interface IUserService<T extends Document> {
  findOne: (userDetailQuery: UserDetailQueryArg) => Promise<UserDto>;
  add: (user: CreateUserInput) => Promise<UserDto>;
  create: (user: CreateUserInput) => Promise<UserDto>;
  find: (options?: any) => Promise<UserDto>;
  update: () => any;
  delete: (userDetailQuery: UserDetailQueryArg) => number;
}
