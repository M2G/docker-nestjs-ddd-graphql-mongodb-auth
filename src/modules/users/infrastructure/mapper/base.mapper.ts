import type { Document, Model } from "mongoose";
import type { IWrite, IRead } from 'modules/users/domain/aggregate/repository/base.repository';
import type { User } from "modules/users/infrastructure/mongoose/user.schema";

export abstract class BaseMapperService<T extends Document> implements IRead<T>, IWrite<T> {
  private readonly _model: Model<Document>;

  public constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  async findOne(id: number): Promise<User> {
    return await this._model.findOne(id).lean();
  }

  async find(options?: any): Promise<User[]> {
    console.log('_repo find');
    return await this._model.find(options).lean();
  }

  async create(t: User): Promise<User> {
    return await this._model.create(t);
  }

  async update(id: number, t: User): Promise<User> {
    return await this._model.findByIdAndUpdate({ id } as any, { ...t }, { new: true, upsert: true });
  }

  async delete(id: number): Promise<User> {
    console.log('findByIdAndDelete', id);
    return await this._model.findByIdAndDelete({ _id: id.id });
  }
}
