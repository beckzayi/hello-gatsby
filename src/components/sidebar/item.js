import React from 'react';
import { Link } from 'gatsby';

const Item = ({ title, link }) => {
    return (
        <li>
            <Link to={ link } activeClassName="current-page active bd-sidenav-active">
                { title }
            </Link>
        </li>
    );
};

export default Item;
