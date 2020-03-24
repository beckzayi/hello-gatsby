import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <div>
            <h1>Introduction</h1>
            <div>EnableHR can be integrated with many environments and programming languages via our REST API. Some of our users have contributed their API wrappers in various programming languages.</div>
        </div>
        <div className="mt-4">
            <h1>Overview</h1>
            <div>
                <p>The EnableHR API allows you to interact with our system programmatically from your own application. Using the API you interact with Resources such as:</p>
                <ul>
                    <li><Link to="/docs/pets/read-pet">Pets</Link> (reference: <Link to="https://petstore.swagger.io/">Swagger UI</Link>)</li>
                    <li>Stores</li>
                    <li>Subscriptions</li>
                </ul>
            </div>
        </div>
        <div className="mt-4">
            <h1>Demo</h1>
            <div>
                <ul>
                    <li>Go to <Link to="/docs/pets/read-pet">Read Pet</Link></li>
                    <li>Click the "GET" button</li>
                    <li>Click "Try it out", and enter <code>petId</code>, <code>2</code> for example</li>
                    <li>Lastly click "Execute" to send request</li>
                </ul>
            </div>
        </div>
        <div className="mt-4">
            <h1>Technologies</h1>
            <div>
                <ul>
                    <li><b>Gatsby</b> - an html generator.</li>
                    <li><b>React</b> - Gatsby is based on React.</li>
                    <li><b>Markdown</b> - to write plain text, also able to include React components.</li>
                    <li><b>Swagger UI</b> - an API documentation tool.</li>
                    <li><b>GraphQL</b> - Gatsby already includes this tool, but it is not widely used in this project yet.</li>
                </ul>
            </div>
        </div>
    </Layout>
);
