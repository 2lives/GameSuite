/*!
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *     http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
import { Cache } from 'apollo-cache';
import { InMemoryCache, ApolloReducerConfig, NormalizedCache, defaultDataIdFromObject, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { Store } from 'redux';
export declare const NORMALIZED_CACHE_KEY = "appsync";
export declare const METADATA_KEY = "appsync-metadata";
export { defaultDataIdFromObject };
export interface OfflineCache extends NormalizedCache {
    rehydrated: boolean;
    [NORMALIZED_CACHE_KEY]: any;
    [METADATA_KEY]: {
        idsMap: object;
    };
}
export default class MyCache extends InMemoryCache {
    private store;
    constructor(store: Store<OfflineCache>, config?: ApolloReducerConfig);
    restore(data: NormalizedCacheObject): this;
    write(write: Cache.WriteOptions): void;
    reset(): Promise<void>;
    getIdsMap(): {};
}
export declare const reducer: () => {
    [NORMALIZED_CACHE_KEY]: (state: {}, action: any) => any;
};
