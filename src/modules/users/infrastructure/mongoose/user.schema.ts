/*eslint-disable*/
// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

/*
  _id?: Types.ObjectId | string;
  email?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  password?: string | undefined;
  created_at?: string;
  modified_at?: string;
  reset_password_token?: string;
  reset_password_expires?: Date;
  token?: string;
 */

export const UserSchema = new mongoose.Schema({
  _id: String,
  email: String,
  username: String,
  first_name: String,
  last_name: String,
  password: String,
  created_at: Date,
  modified_at: Date,
});

@ObjectType()
export class User extends Document {
  @Field()
  _id!: string;

  @Field()
  first_name!: string;

  @Field()
  last_name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @Field()
  created_at!: string;

  @Field()
  modified_at!: string;
}
