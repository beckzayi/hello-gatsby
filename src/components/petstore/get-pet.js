import React from 'react';
import "swagger-ui-react/swagger-ui.css";

class GetPet extends React.Component {
    render() {
        const { SwaggerUI } = window;
        return (
            <div>
                {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
                <SwaggerUI
                    url="/api/petstore/get-pet.json"
                    docExpansion="list"
                />
            </div>
        );
    }
}

export default GetPet;