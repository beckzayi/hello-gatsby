import React from 'react';
import "swagger-ui-react/swagger-ui.css";

export default () => {
    const { SwaggerUI } = window;
    return (
        <div>
            <SwaggerUI
                url="/api/petstore/create-pet.json"
                docExpansion="list"
                defaultModelsExpandDepth={0}
            />
        </div>
    );
};
