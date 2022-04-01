import { configuration } from './config/configuration';

export const getORMConfig = () => {
    const {
        dbHost,
        username,
        password,
        dbName,
    } = configuration().databaseConfig;

  return {
    autoLoadEntities: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: true,
    type: 'mongodb',
    url: `mongodb://${username}:${password}@db:${dbHost}/${dbName}`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
};
