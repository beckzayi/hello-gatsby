import React from 'react';
import SwaggerUIReact from 'swagger-ui-react';
import 'swagger-ui/dist/swagger-ui.css';
import Layout from '../../components/layout';

class MyTestReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            definitionLink: "https://petstore.swagger.io/v2/swagger.json",
            deepLinking: false
        }
    }

    componentDidMount() {
        this.setState({
            deepLinking: true
        })
    }

    render() {
        return (
            <Layout>
                <SwaggerUIReact
                    url={this.state.definitionLink}
                    deepLinking={this.state.deepLinking}
                    docExpansion="list"
                />
            </Layout>
        );
    }
}

export default MyTestReact;