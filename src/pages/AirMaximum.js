import React from 'react';
import Header from '../components/Header';
import Maximum from '../components/Maximum';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AirMaximum = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la déscription Nike Air Max</title>
                <meta name="description" content="Shopsports - la déscription Nike Air Max" />

            </Helmet>
            <Header />
            <Maximum />
            <Footer />
        </div>
    );
};

export default AirMaximum;