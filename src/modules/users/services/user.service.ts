// src/user/user.service.ts
import type { FilterQuery, Query } from 'mongoose';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'modules/users/infrastructure/mongoose/user.schema';

@Injectable()
export class UserService {
  constructor(
    @Inject(User)
    private readonly userModel: Model<User>,
  ) {}

  async create(input: Query<User>): Promise<User> {
    return this.userModel.create(input);
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}
