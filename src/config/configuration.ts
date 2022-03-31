export const RequiredEnvVars = [
    'HOST_PORT',
    'MONGO_INITDB_ROOT_USERNAME',
    'MONGO_INITDB_ROOT_PASSWORD',
    'MONGO_INITDB_DATABASE',
    'JWT_SECRET',
];

interface Configuration {
    server: {
        port: number;
    };
    databaseConfig: {
        dbHost: string;
        dbName: string;
        username: string;
        password: string;
    };
}

// Default configuration variables
const DEFAULT_SERVER_PORT = 3000;

export const configuration = (): Configuration => {
    const defaultConfiguration = {
        server: {
            port:
                parseInt(process.env.PORT as string, 10) ||
                DEFAULT_SERVER_PORT,
        },
        databaseConfig: {
            dbHost: process.env.HOST_PORT as string,
            dbName: process.env.MONGO_INITDB_DATABASE as string,
            username: process.env.MONGO_INITDB_ROOT_USERNAME as string,
            password: process.env.MONGO_INITDB_ROOT_PASSWORD as string,
        },
    };

    return defaultConfiguration;
};

export const validateEnvironmentVars = (): void => {
    if (process.env.NODE_ENV === undefined) {
        process.env.NODE_ENV = 'development';
    }

    RequiredEnvVars.forEach(v => {
       if (!process.env[v]) throw Error(`Missing required env variable ${v}`);
    });
};
