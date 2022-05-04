/*eslint-disable*/
// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
// import { IsString, IsEmail } from 'class-validator';
import { Document, Schema } from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';

const emailMatch = [
  /([a-z0-9_\-\.])+@([a-z0-9_\-\.])+\.([a-z0-9])+/i,
  'No email found ({VALUE})',
];

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

export const UserSchema = new Schema({
  email: {
    lowercase: true,
    match: emailMatch,
    maxlength: 255,
    minlength: 5,
    trim: true,
    type: String,
    unique: true,
  },
  first_name: {
    maxlength: 100,
    minlength: 2,
    type: String,
  },
  last_name: {
    maxlength: 100,
    minlength: 2,
    type: String,
  },
  username: {
    maxlength: 100,
    minlength: 2,
    lowercase: true,
    trim: true,
    type: String,
  },
  password: {
    maxlength: 100,
    minlength: 5,
    required: true,
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date().toISOString(),
  },
  modified_at: {
    type: Date,
  }
});


@ObjectType()
export class User extends Document {
  @Field()
  _id!: MongooseSchema.Types.ObjectId;

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
