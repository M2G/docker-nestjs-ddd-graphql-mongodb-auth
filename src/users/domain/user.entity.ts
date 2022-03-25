/*eslint-disable*/
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string | undefined;

  @Column({ length: 100 })
  fullName: string | undefined;

  @Column({ length: 100 })
  email: string | undefined;

  @Column()
  password: string | undefined;
}
