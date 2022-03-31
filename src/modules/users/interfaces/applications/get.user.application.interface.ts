import type { UserDomain } from 'modules/users/domain/user.domain';

export interface GetUserApplication {
    getById: (id: string) => Promise<UserDomain | undefined>;
}
