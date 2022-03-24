import { UserDomain } from "users/domain/user.domain";

export interface IGetAllUserService {
  getAll(): Promise<UserDomain[]>
}
