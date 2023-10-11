import React from 'react';
import Header from '../components/Header';
import Adidas from '../components/Adidas';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AdidasHome = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Ballon Adidas</title>
                <meta name="description" content="Shopsports -  la description Ballon Adidas" />

            </Helmet>
            <Header />
            <Adidas />
            <Footer />
        </div>
    );
};

export default AdidasHome;