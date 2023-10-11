import React from 'react';
import Header from '../components/Header';
import Ball from '../components/Ball';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const BallHome = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Ballon de basketball</title>
                <meta name="description" content="Shopsports -  la description Ballon de basketball" />

            </Helmet>
            <Header />
            <Ball />
            <Footer />
        </div>
    );
};

export default BallHome;