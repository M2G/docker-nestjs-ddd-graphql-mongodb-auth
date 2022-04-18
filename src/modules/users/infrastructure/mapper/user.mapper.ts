import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from "modules/users/infrastructure/mongoose/user.schema";
import { BaseMapperService } from './base.mapper';

@Injectable()
export class UserMapperService extends BaseMapperService<User> {
  public constructor(
    @Inject(User) private readonly userRepo: Model<User>,
  ) {
    super(userRepo);
  }
}
