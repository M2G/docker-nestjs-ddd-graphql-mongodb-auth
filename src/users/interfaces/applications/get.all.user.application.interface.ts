import { UserDomain } from "users/domain/user.domain";

export interface IGetAllUserApplication {
  getAll(): Promise<UserDomain[]>
}
