import React from 'react';
import Header from '../components/Header';
import ShirtMen from '../components/ShirtMen';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Shirt = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la page T Shirt</title>
                <meta name="description" content="Shopsports - la page T Shirt" />

            </Helmet>
            <Header />
            <ShirtMen />
            <Footer />
        </div>
    );
};

export default Shirt;