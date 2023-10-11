import React from 'react';
import Header from '../components/Header';
import WomenShoes from '../components/WomenShoes';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Shoes = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la page chaussures femmes</title>
                <meta name="description" content="Shopsports -  la page chaussures femmes" />

            </Helmet>
            <Header />
            <WomenShoes />
            <Footer />
        </div>
    );
};

export default Shoes;