import React from 'react';
import Header from '../components/Header';
import Max from '../components/Max';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AirMax = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Nike Air Max 270 React</title>
                <meta name="description" content="Shopsports -  la description Nike Air Max 270 React" />

            </Helmet>
            <Header />
            <Max />
            <Footer />
        </div>
    );
};

export default AirMax;