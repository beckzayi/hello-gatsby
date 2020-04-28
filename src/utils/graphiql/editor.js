import React from 'react';
import GraphiQL from "graphiql";
import graphQLFetcher from './fetcher';

export default ({ queryString }) => (
    <div style={{ height: '100vh' }}>
        <GraphiQL
            fetcher={graphQLFetcher}
            query={queryString}
        />
    </div>
);
