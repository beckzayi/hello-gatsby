import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
    <header className="navbar navbar-expand bd-navbar">
        <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="enableHR">
            <img src="/images/logo.svg" title="enableHR" alt="enableHR" />
        </a>
        <div className="navbar-nav-scroll">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link" activeClassName="current-page">Home</Link></li>
                <li className="nav-item"><Link to="/development" className="nav-link" activeClassName="current-page">Development</Link></li>
            </ul>
        </div>
    </header>
)

export default Header;