import React from 'react';
import Accordion from './accordion';
import { itemListDocs } from '../../utils/sidebar/item-list';

class Sidebar extends React.Component {
    render() {
        const { items } = itemListDocs;
        
        return (
            <section
                aria-label="Secondary Navigation"
                id="SecondaryNavigation"
                className="doc-sidebar"
            >
                <nav className="bd-links">
                    {items.map((item) => (
                        <div key={item.title} className="bd-toc-item">
                            <Accordion {...item} />
                        </div>
                    ))}
                </nav>
            </section>
        );
    }
}

export default Sidebar;
