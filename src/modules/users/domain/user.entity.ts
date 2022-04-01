/*eslint-disable*/
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

/*
_id
first_name
last_name
email
password
created_at
modified_at
 */

@Entity()
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  _id!: string;

  @Field(() => String)
  @Column({ length: 100 })
  first_name!: string;

  @Field(() => String)
  @Column({ length: 100 })
  last_name!: string;

  @Field(() => String)
  @Column()
  email!: string;

  @Field(() => String)
  @Column()
  password!: string;

  @Field(() => String)
  @Column()
  created_at!: string;

  @Field(() => String)
  @Column()
  modified_at!: string;
}