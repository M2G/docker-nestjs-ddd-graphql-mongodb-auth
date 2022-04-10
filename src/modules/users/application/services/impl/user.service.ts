// src/user/user.service.ts
import type { FilterQuery, Query } from 'mongoose';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'modules/users/infrastructure/mongoose/user.schema';
import type { IUserService } from '../users';
import {UserRepositoryImpl} from "../../../infrastructure/repository/user.repository";
import {UserAssembler} from "../../assembler/user.assembler";
import {UserMapperService} from "../../../infrastructure/mapper/user.mapper";

@Injectable()
export class UserService implements IUserService<any> {

  @Inject()
  private readonly userMapper: UserMapperService;

  @Inject()
  private readonly userAssembler: UserAssembler;

  @Inject()
  private readonly userRepository: UserRepositoryImpl;

  /*constructor(
    @Inject(User)
    private readonly userModel: Model<User>,
  ) {}*/

 /* async create(input: Query<User, any, any, any>): Promise<User> {
    return this.userRepository.create(input);
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userRepository.findOne(query).lean();
  }*/

  async find(): Promise<User[]> {
    console.log('find');
    return this.userRepository.find();
  }
}
