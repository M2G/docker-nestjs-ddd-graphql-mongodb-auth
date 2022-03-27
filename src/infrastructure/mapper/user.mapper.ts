/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { BaseMapperService } from './base.mapper';

@Injectable()
export class UserMapperService extends BaseMapperService<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        //@ts-ignore
        private readonly userRepo: Repository<UserEntity>,
    ) {
        super(userRepo);
    }
}
