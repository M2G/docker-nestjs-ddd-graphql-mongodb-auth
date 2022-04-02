/*eslint-disable*/
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'modules/users/domain/user.entity';
import type { UserDomain } from 'modules/users/domain/user.domain';
import type { GetUserService } from 'modules/users/interfaces/services/get.user.service.interface';

@Injectable()
export class GetUserServiceImpl implements GetUserService {
  public constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getById(id: string): Promise<UserDomain | undefined> {
    console.log('GetUserServiceImpl GetUserServiceImpl', id);

    // @ts-ignore
    const res = (await this.usersRepository.find({})) as any;

    console.log('res res res res res', res);

    return res;
  }

  async getByEmail(email: string): Promise<UserDomain | undefined> {
    return this.usersRepository.findOne({ where: { email } }) as any;
  }
}
