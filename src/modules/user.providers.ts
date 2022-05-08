import type { Connection } from 'mongoose';
import { User, UserSchema } from 'modules/infrastructure/mongoose/user.schema';

const userProviders = [
  {
    inject: ['DATABASE_CONNECTION'],
    provide: User,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
  },
];

export default userProviders;

