
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SigninInput {
    email: string;
    password: string;
    name?: Nullable<string>;
}

export class LoginInput {
    email: string;
    password: string;
}

export class CreateUserInput {
    _id?: Nullable<string>;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    created_at: string;
    modified_at?: Nullable<string>;
}

export abstract class IMutation {
    abstract signin(input?: Nullable<SigninInput>): boolean | Promise<boolean>;

    abstract login(input?: Nullable<LoginInput>): string | Promise<string>;

    abstract createUser(input: CreateUserInput): User | Promise<User>;

    abstract deleteItem(id: string): User | Promise<User>;

    abstract updateUser(id: string, input: CreateUserInput): User | Promise<User>;
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

type Nullable<T> = T | null;
