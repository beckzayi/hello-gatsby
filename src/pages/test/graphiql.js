import React from 'react';
import GraphiQL from "graphiql"
import Layout from '../../components/layout';
import 'graphiql/graphiql.css';

const query = `query {
    allFilms {
        id
        director
    }
}`;

const endpoint = 'https://api.graph.cool/simple/v1/swapi';

function graphQLFetcher(graphQLParams) {
    return fetch(endpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams)
    }).then(res => res.json());
}

class MyGraphiQL extends React.Component {
    render() {
        return(
            <Layout>
                <div style={{ height: '100vh' }}>
                    <GraphiQL
                        fetcher={graphQLFetcher}
                        query={query}
                    />
                </div>
            </Layout>
        );
    }
}

export default MyGraphiQL;
