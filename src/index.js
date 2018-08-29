import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';

const client = new AWSAppSyncClient({
    url:
        'https://4fvbz3rb75gl5ct2hax5tqt5fe.appsync-api.us-west-2.amazonaws.com/graphql',
    region: 'us-west-2',
    auth: {
        type: 'API_KEY',
        apiKey: 'da2-fnrzjms7f5dnbbagyipaes27ai'
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Rehydrated>
            <App />
        </Rehydrated>
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
