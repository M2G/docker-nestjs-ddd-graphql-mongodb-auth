import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export default class GraphqlService implements GqlOptionsFactory {
    async createGqlOptions(): Promise<GqlModuleOptions> {
        return {
         // autoSchemaFile: 'schema.gql',
          typePaths: ['./**/*.graphql'],
          definitions: {
            path: join(process.cwd(), 'src/graphql.ts'),
            outputAs: 'class',
          },
        } as any;
    }
}
