/*eslint-disable*/
import {
 Controller, Inject, Res, HttpStatus, Get,
} from '@nestjs/common';
import { USER_TYPES } from '../interfaces/types';
import { IGetAllUserApplication } from '../interfaces/applications/get.all.user.application.interface';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(USER_TYPES.applications.IGetAllUserApplication) private readonly getAllUserApp: IGetAllUserApplication,
 ) {}

  @Get()
  async findAll(@Res() res: any) {
    try {
      const users = await this.getAllUserApp.getAll();
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: users,
      });
    } catch (err: unknown) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err,
      });
    }
  }
}
