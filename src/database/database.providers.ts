// src/database/database.providers.ts
import mongoose from 'mongoose';
// import { MONO_DB_CONNECTION_STRING } from '../constants';

const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      mongoose.connect("mongodb://root_user:root_user_pw@db:27017/root_db"),
  },
];

export default databaseProviders;

