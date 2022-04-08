import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  email!: boolean;

  @Column()
  password!: boolean;

  @Column()
  created_at!: boolean;

  @Column()
  modified_at!: boolean;
}
