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
                    <li><Link to="/docs/pets/read-pet" >Pets</Link></li>
                    <li>Stores</li>
                    <li>Subscriptions</li>
                </ul>
            </div>
        </div>
    </Layout>
);
