/*eslint-disable*/
import {
  Injectable,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import type { UserDomain } from 'modules/users/domain/user.domain';
import type { GetUserApplication } from 'modules/users/interfaces/applications/get.user.application.interface';
import { GetUserService } from 'modules/users/interfaces/services/get.user.service.interface';
import { TYPES } from 'modules/users/interfaces/types';

@Injectable()
export class GetUserApplicationImpl implements GetUserApplication {
  public constructor(
    @Inject(TYPES.services.GetUserService)
    private readonly getUserService: GetUserService,
  ) {}

  async getById(id: string): Promise<UserDomain> {
    console.log('getById getById', id);

    const user = await this.getUserService.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} was not found`);
    }
    return user;
  }
}
