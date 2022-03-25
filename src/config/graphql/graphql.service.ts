import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
    async createGqlOptions(): Promise<GqlModuleOptions> {
      return {
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
                outputAs: 'class',
            },
            context: ({ req, connection }: any) => {
                if (connection) {
                    return { req: connection.context };
                }
                return { req };
            },
            // @ts-ignore
            debug: true,
            installSubscriptionHandlers: true,
            introspection: true,
        };
    }
}
