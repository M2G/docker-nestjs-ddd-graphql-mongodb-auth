import type { UserDomain } from 'modules/users/domain/user.domain';

export interface CreateUserService {
  create: (userDomain: UserDomain) => Promise<UserDomain>;
}
