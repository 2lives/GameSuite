/// <reference types="react" />
import { DocumentNode } from 'graphql';
import { CacheOperationTypes, CacheUpdatesOptions } from 'aws-appsync';
export declare const graphqlMutation: (mutation: DocumentNode, cacheUpdateQuery: CacheUpdatesOptions, typename: string, idField?: string, operationType?: CacheOperationTypes) => (Component: any) => (props: any, context: any) => JSX.Element;
