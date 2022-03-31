import type { UserDomain } from 'modules/users/domain/user.domain';

export interface CreateUserApplication {
    create: (userDomain: UserDomain) => Promise<UserDomain>;
}
