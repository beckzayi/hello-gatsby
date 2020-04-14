import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Item from './item';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    handleOnClick() {
        this.setState({
            isExpand: !this.state.isExpand
        })
    }

    render() {
        return (
            <>
                <div className="bd-toc-link">
                    { this.props.link ?
                        <Link to={this.props.link}>
                            {this.props.title}
                        </Link> :
                        this.props.title
                    }
                    { this.props.items && (
                        <span
                            style={ { float: 'right', color: '#a2a6b1' } }
                            onClick={this.handleOnClick}
                        >
                            <FontAwesomeIcon icon={ this.state.isExpand ? faChevronUp : faChevronRight } />
                        </span>
                    ) }
                    
                </div>
                { this.props.items && (
                    <ul className={`nav bd-sidenav ${!this.state.isExpand && `d-none`}`}>
                        { this.renderItems(this.props.items) }
                    </ul>
                ) }
            </>
        );
    }

    renderItems(items) {
        return (
            items.map(subItem => <Item key={subItem.title} {...subItem} />)
        );
    }
}

export default Accordion;
