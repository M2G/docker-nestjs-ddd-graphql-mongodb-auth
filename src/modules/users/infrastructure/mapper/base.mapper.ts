import type { Document, Model } from "mongoose";
import type { IWrite, IRead } from 'modules/users/domain/aggregate/repository/base.repository';
import type { User } from "modules/users/infrastructure/mongoose/user.schema";

export abstract class BaseMapperService<T extends Document> implements IRead<T>, IWrite<T> {
  private readonly _model: Model<Document>;

  public constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  findOne(id: number): User {
    return this._model.findOne(id).lean();
  }

  find(options?: any): User[] {
    console.log('_repo find');
    return this._model.find(options).lean();
  }

  delete(id: number): boolean {
    return this._model.findByIdAndDelete(id);
  }

  create(t: User): User {
    return this._model.create(t);
  }

  update(id: number, t: User): User {
    return this._model.findByIdAndUpdate({ id } as any, { ...t }, { new: true, upsert: true });
  }
}
