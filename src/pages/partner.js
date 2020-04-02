import React from 'react';
import Layout from '../components/layout';

class Partner extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <h1>Build, launch and grow your app with enableHR</h1>

                    <hr />
                
                    <p>EnableHR already has over one million subscribers worldwide. Building to our API creates a revenue stream and global channel to market for your software.</p>

                    <div className="mb-5">
                        <p>We’re happy to answer all your questions. Call us on our toll-free number <span className="contact-number">1300 549 548</span></p>
                        <p>Or fill out the form and we’ll get back to you soon.</p>
                    </div>

                    <div className="row pt-5">
                        <div className="offset-md-3 col-md-6">
                            <form>
                                <div className="input-group mb-5">
                                    <label htmlFor="name">Name</label>
                                    <input name="name" type="text" id="name" aria-required="true" />
                                </div>
                                <div className="input-group mb-5">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" type="email" id="email" aria-required="true" />
                                </div>
                                <div className="input-group mb-5">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <div className="input-group">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Partner;
