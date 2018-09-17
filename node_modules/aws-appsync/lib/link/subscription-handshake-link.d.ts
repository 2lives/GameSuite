/*!
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *     http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
import { ApolloLink, Observable } from "apollo-link";
export declare class SubscriptionHandshakeLink extends ApolloLink {
    private subsInfoContextKey;
    private clientTopics;
    private topicObserver;
    constructor(subsInfoContextKey: any);
    request(operation: any): Observable<{}>;
    /**
     * @returns  {Promise<void>}
     */
    disconnectAll: () => Promise<any>;
    unsubscribeFromTopic: (client: any, topic: any) => Promise<{}>;
    /**
     *
     * @param {Paho.Client} client
     * @param {Set<string>} topics
     */
    disconnectClient: (client: any, topics: any) => Promise<{}>;
    /**
     *
     * @param {ZenObservable.Observer} observer
     * @param {[any]} connectionsInfo
     * @returns {Promise<void>}
     */
    connectAll: (observer: any, connectionsInfo: any[], lastTopicObserver: any) => Promise<any>;
    connect: (observer: any, lastTopicObserver: any, connectionInfo: any) => Promise<{
        client: {};
        topics: any[];
    }>;
    onMessage: (topic: any, message: any) => void;
}
