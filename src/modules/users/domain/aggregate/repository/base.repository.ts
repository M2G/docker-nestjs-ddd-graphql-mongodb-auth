import type {
  Document,
  Model,
  UpdateQuery,
  Query,
  Types,
} from "mongoose";

interface IRead<T extends Document> {
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

interface IWrite<T extends Document> {
  create: ((item?: Query<any[], any, {}, any>,
            callback?: (error: any, result?: T[]) => void) => Query<T[], T>);
  update: (_id?: Types.ObjectId, item?: UpdateQuery<T>,
           callback?: (error: any, result: Model<T> | null) => void) => void;
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

  constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;

    console.log('schemaModel', schemaModel);
  }

  create(item: T, callback: (error: any, result: T) => void) {
    this._model.create(item, callback);
  }

  retrieve(callback: (error: any, result: T) => void) {
    this._model.find({}, callback);
  }

  update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
    this._model.update({ _id }, item, callback);
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._model.remove({ _id: this.toObjectId(_id) }, (err) => { callback(err, null); });
  }

  findById(_id: string, callback: (error: any, result: T) => void) {
    this._model.findById(_id, callback);
  }

  findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T> {
    return this._model.findOne(cond, callback);
  }

  find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]> {
    return this._model.find(cond, options, callback);
  }

  findByIdAndUpdate() {}

  findByIdAndDelete() {}
}

export default RepositoryBase;
