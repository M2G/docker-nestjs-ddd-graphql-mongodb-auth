import type { Document } from 'mongoose';

import type { UserDetailQueryArg } from 'modules/interfaces/graphql/dto/user-detail.args';
import type { UserDto } from 'modules//interfaces/graphql/types/user';
import type { CreateUserInput } from 'modules/interfaces/graphql/dto/user-add.input';

export interface IUserService<T extends Document> {
  findOne: (userDetailQuery: UserDetailQueryArg) => Promise<UserDto>;
  add: (user: CreateUserInput) => Promise<UserDto>;
  create: (user: CreateUserInput) => Promise<UserDto>;
  find: (options?: any) => Promise<UserDto>;
  update: (userDetailQuery: UserDetailQueryArg, user: CreateUserInput) => Promise<UserDto>;
  delete: (userDetailQuery: UserDetailQueryArg) => number;
}
