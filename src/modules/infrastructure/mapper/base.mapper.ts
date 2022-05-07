import type { Document, Model } from 'mongoose';
import type {
  IWrite,
  IRead,
} from 'modules/domain/aggregate/repository/base.repository';
import type { User } from 'modules/infrastructure/mongoose/user.schema';

export abstract class BaseMapperService<T extends Document>
  implements IRead<T>, IWrite<T> {
  private readonly _model: Model<Document>;

  public constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  findOne(user: User): User {
    return this._model.findOne(user).lean();
  }

  find(options?: {
    new?: boolean; upsert?: boolean; runValidators?: boolean;
    setDefaultsOnInsert?: boolean; sort?: any; select?: any;
    rawResult?: any; strict?: any;
  }): User[] {
    return this._model.find(options).lean();
  }

  create(t: User): User {
    return this._model.create(t);
  }

   update(id: User, t: User): User {
    return this._model.findByIdAndUpdate(
      { id } as any,
      { ...t },
      { new: true, upsert: true },
    );
  }

   delete(id: User): User | null {
    console.log('findByIdAndDelete', id);
    return this._model.findByIdAndDelete({ _id: { ...id } });
  }
}
