import type User from '../user';

interface UserRepository {
  find: (id: string) => Promise<User>;
  findOne: (user: User) => Promise<User>;
  save: (user: User) => Promise<User>;
  update: (_id: User, user: User) => Promise<User>;
  delete: (_id: User) => Promise<User>;
}

export default UserRepository;
