import React from 'react';
import Header from '../components/Header';
import NikeRed from '../components/NikeRed';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AirRed = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Nike Zoom Air Red</title>
                <meta name="description" content="Shopsports -  la description Nike Air Red" />

            </Helmet>
            <Header />
            <NikeRed />
            <Footer />
        </div>
    );
};

export default AirRed;