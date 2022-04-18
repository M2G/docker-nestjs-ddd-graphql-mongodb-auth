import type {
  Document,
  Model,
  UpdateQuery,
  Query,
  Types,
} from "mongoose";

export interface IRead<T extends Document> {
  findById: (id?: Types.ObjectId, callback?: (error: any, result?: Model<T>) => void) => void;
  findOne: ((conditions: any, projection: any,
             callback?: (err: any, res: Model<T> | null) => void) => Query<T | null, T>)
    & ((conditions: any, projection: any, options: any,
        callback?: (err: any, res: Model<T> | null) => void) => Query<T | null, T>)
    & ((conditions?: any,
        callback?: (err: any, res: Model<T> | null) => void) => Query<T | null, T>);

  find: ((callback?: (err: any, res?: Model<T>[]) => void) => Query<T[], T>)
    & ((conditions: any, callback?: (err: any, res?: Model<T>[]) => void) => Query<T[], T>)
    & ((conditions: any, projection?: any | null,
        callback?: (err: any, res?: T[]) => void) => Query<T[], T>)
    & ((conditions: any, projection?: any | null, options?: any | null,
        callback?: (err: any, res?: Model<T>[]) => void) => Query<T[], T>);
}

export interface IWrite<T extends Document> {
  create: ((item?: Query<any[], any, {}, any>,
            callback?: (error: any, result?: T[]) => void) => Query<T[], T>);
  findByIdAndUpdate: (_id?: Types.ObjectId, item?: UpdateQuery<T>, options?: {
                        new?: boolean; upsert?: boolean; runValidators?: boolean;
                        setDefaultsOnInsert?: boolean; sort?: any; select?: any;
                        rawResult?: any; strict?: any;
                      },
                      callback?: (error: any, result: Model<T> | null) => any) => any;
  findByIdAndDelete: (_id?: Types.ObjectId, item?: UpdateQuery<T>, options?: {},
                      callback?: (error: any, result: Model<T> | null) => any) => any;
}

class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T> {
  private readonly _model: Model<Document>;

  public constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  create(item: T, callback: (error: any, result: T) => void) {
    return this._model.create(item, callback);
  }

  findById(_id: string, callback: (error: any, result: T) => void) {
    return this._model.findById(_id, callback);
  }

  findOne(cond?: Object, callback?: (err: any, res: T) => void): Query<T> {
    return this._model.findOne(cond, callback).lean();
  }

  find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): Query<T[]> {
    return this._model.find(cond, options, callback).lean();
  }

  update(_id: Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
    return this._model.findByIdAndUpdate({ _id }, item, callback);
  }

  delete(_id: Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
    return this._model.findByIdAndUpdate({ _id }, item, callback);
  }
}
