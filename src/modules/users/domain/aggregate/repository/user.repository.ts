import type { User } from '../user';

interface UserRepository {
  find: (id: string) => Promise<User>;
  findOne: () => any;
  save: (user: User) => Promise<User>;
  update: (id: string, user: User) => Promise<User>;
  delete: (id: string) => Promise<User>;
}

export default UserRepository;
