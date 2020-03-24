import React from 'react';
import Loadable from '@loadable/component';
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = Loadable(() => import('swagger-ui-react'));

const Posts = () => (
    <div>
        <SwaggerUI
            url="/api/jsonplaceholder/all-posts.json"
            docExpansion="list"
        />
    </div>
);

export default Posts;