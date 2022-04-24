
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    _id?: Nullable<string>;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    created_at: string;
    modified_at?: Nullable<string>;
}

export class User {
    _id?: Nullable<string>;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    created_at: string;
    modified_at?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract getUser(id: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): User | Promise<User>;

    abstract deleteItem(id: string): User | Promise<User>;

    abstract updateUser(id: string, input: CreateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
