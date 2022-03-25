import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { UserDomain } from '../domain/user.domain';
import { User } from '../domain/user.entity';
import type { IGetAllUserService } from '../interfaces/services/get.all.user.service.interface';

@Injectable()
export class GetAllUserService implements IGetAllUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<UserDomain[]> {
    return this.userRepository.find();
  }
}
