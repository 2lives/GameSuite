/*!
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *     http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
import { Observable } from 'apollo-link';
import { ApolloLink } from 'apollo-link';
import { Credentials, CredentialsOptions } from 'aws-sdk/lib/credentials';
export declare enum AUTH_TYPE {
    NONE = "NONE",
    API_KEY = "API_KEY",
    AWS_IAM = "AWS_IAM",
    AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS",
    OPENID_CONNECT = "OPENID_CONNECT"
}
export declare class AuthLink extends ApolloLink {
    private link;
    /**
     *
     * @param {*} options
     */
    constructor(options: any);
    request(operation: any, forward: any): Observable<import("apollo-link/lib/types").FetchResult<Record<string, any>, Record<string, any>>>;
}
export interface AuthOptions {
    type: AUTH_TYPE;
    credentials?: (() => Credentials | CredentialsOptions | null | Promise<Credentials | CredentialsOptions | null>) | Credentials | CredentialsOptions | null;
    apiKey?: (() => (string | Promise<string>)) | string;
    jwtToken?: (() => (string | Promise<string>)) | string;
}
export declare const authLink: ({ url, region, auth: { type, credentials, apiKey, jwtToken } }: {
    url: any;
    region: any;
    auth?: AuthOptions;
}) => ApolloLink;
