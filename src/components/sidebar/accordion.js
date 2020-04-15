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

    toggleAccordion = () => {
        this.setState({
            isExpand: !this.state.isExpand
        });
    }

    openAccordion = (e) => {
        this.setState({
            isExpand: true
        });
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
                            className="arrow-nav"
                            onClick={this.toggleAccordion}
                        >
                            <FontAwesomeIcon icon={ this.state.isExpand ? faChevronUp : faChevronRight } />
                        </span>
                    ) }
                    
                </div>
                { this.props.items && (
                    <ul className={`nav bd-sidenav ${this.state.isExpand ? `d-block` : `d-none`}`}>
                        { this.renderItems(this.props.items) }
                    </ul>
                ) }
            </>
        );
    }

    renderItems(items) {
        return (
            items.map(subItem => <Item key={subItem.title} {...subItem} onLinkClick={this.openAccordion} />)
        );
    }
}

export default Accordion;
