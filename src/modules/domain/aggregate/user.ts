import type { Schema as MongooseSchema } from 'mongoose';

export class User {
    _id!: MongooseSchema.Types.ObjectId;

   first_name!: string;

   last_name!: string;

   email!: string;

   password!: string;

   created_at!: string;

   modified_at!: string;
}
