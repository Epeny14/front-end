import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WomenMain from '../components/WomenMain';
import { Helmet } from 'react-helmet';

const WomanCatalog = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la page Femme</title>
                <meta name="description" content="Shopsports -  la page Femme" />

            </Helmet>
            <Header />
            <WomenMain />
            <Footer />
        </div>
    );
};

export default WomanCatalog;