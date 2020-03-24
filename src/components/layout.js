import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import Sidebar from './sidebar';
import useSiteMetadata from '../hooks/use-sitemetadata';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/swagger-global.css';
import '../styles/theme-material.css';

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-xl-2 bd-sidebar"><Sidebar /></div>
                    <div className="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                        <main>{ children }</main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
