import RepositoryBase from '../../domain/aggregate/repository/base.repository';
import { User } from "../mongoose/user.schema";

export abstract class BaseMapperService extends RepositoryBase<User> {
  private readonly _repo: any;

  public constructor(test: any, repo: any) {
    super(test);

    this._repo = repo;
  }

  async findOne(id: number): Promise<User> {
    console.log('find find find', id);
    return this._repo.findOne(id);
  }

  async findAll(options?: any): Promise<User[]> {
    console.log('find find find', this._repo);
    return this._repo.find();
   // return this.repo.find(options);
  }

  async delete(id: number): Promise<boolean> {
    return this._repo.findByIdAndDelete(id);
  }

  async add(t: User): Promise<User> {
    return this._repo.create(t);
  }

  async update(id: number, t: User): Promise<boolean> {
    const updateResult = await this._repo.update(id, t);
    return updateResult.affected > 0;
  }
}
