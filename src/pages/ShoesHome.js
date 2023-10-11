import React from 'react';
import Header from '../components/Header';
import Shoes from '../components/Shoes';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ShoesHome = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Chaussure de football</title>
                <meta name="description" content="Shopsports -  la description Chaussure de football" />

            </Helmet>
            <Header />
            <Shoes />
            <Footer />
        </div>
    );
};

export default ShoesHome;