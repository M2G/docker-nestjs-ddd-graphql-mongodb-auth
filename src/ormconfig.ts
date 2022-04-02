import { getMetadataArgsStorage } from 'typeorm';
import type { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { configuration } from './config/configuration';

export const getORMConfig = (): MongoConnectionOptions => {
  const {
 dbHost, username, password, dbName,
} = configuration().databaseConfig;

  return {
    entities: getMetadataArgsStorage().tables.map(
      (tbl) => tbl.target,
    ),
    // entities: ['build/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: true,
    type: 'mongodb',
    url: `mongodb://${username}:${password}@db:${dbHost}/${dbName}`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
};
