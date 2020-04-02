import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';
import '../styles/app.scss';

const Layout = (props) => {
    const { title, description } = useSiteMetadata();
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Helmet>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    {
                        props.includeSidebar === false ?
                        <>
                            <div className="col-md-12 col-xl-12 py-md-3 bd-content">
                                <main>{ props.children }</main>
                            </div>
                        </>
                        :
                        <>
                            <div className="col-md-3 col-xl-2 bd-sidebar"><Sidebar /></div>
                            <div className="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                                <main>{ props.children }</main>
                            </div>
                        </>
                    }
                    
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 offset-md-3 col-xl-8 offset-xl-2 py-md-3 pl-md-5">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
