import RepositoryBase from 'modules/users/domain/aggregate/repository/base.repository';
import type { User } from "modules/users/infrastructure/mongoose/user.schema";

export abstract class BaseMapperService extends RepositoryBase<User> {
  private readonly _repo: any;

  public constructor(repo: any) {
    super(repo);

    this._repo = repo;
  }

  async findOne(id: number): Promise<User> {
    return this._repo.findOne(id);
  }

  async find(options?: any): Promise<User[]> {
    return this._repo.find(options);
  }

  async delete(id: number): Promise<boolean> {
    return this._repo.findByIdAndDelete(id);
  }

  async create(t: User): Promise<User> {
    return this._repo.create(t);
  }

  async update(id: number, t: User): Promise<boolean> {
    return await this._repo.findByIdAndUpdate({ id } as any, { ...t }, { new: true, upsert: true });
  }
}
