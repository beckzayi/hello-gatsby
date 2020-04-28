import React from 'react';
import GraphiQLEditor from '../../utils/graphiql/editor';
import queryString from './all-films-query';
import Options from '../option/options';

class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphql: true // query GraphQL API endpoint or REST API endpoint
        };
    }

    updateApiOption = (option) => {
        this.setState(() => ({
            graphql: option
        }))
    }

    renderContent() {
        if (this.state.graphql) {
            return (
                <GraphiQLEditor queryString={queryString} />
            );
        } else {
            return 'SwaggerUI';
        }
    }

    renderOptions() {
        return(
            <Options onOptionClick={this.updateApiOption} graphql={this.state.graphql} />
        );
    }

    render() {
        return(
            <div>
                <div className="mb-4">{ this.renderOptions() }</div>
                <div>{ this.renderContent() }</div>
            </div>
        );
    }
}

export default Films;
