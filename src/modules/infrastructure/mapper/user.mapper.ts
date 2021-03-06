import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'modules/infrastructure/mongoose/user.schema';
import BaseMapperService from './base.mapper';

@Injectable()
export default class UserMapperService extends BaseMapperService<User> {
  public constructor(@Inject(User) private readonly userRepo: Model<User>) {
    super(userRepo);
  }
}
