import React from 'react';
import Header from '../components/Header';
import Nikes from '../components/Nikes';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const NikeZoom = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Nike Zoom Version - 2</title>
                <meta name="description" content="Shopsports -  la description Nike Zoom Version - 2" />

            </Helmet>
            <Header />
            <Nikes />
            <Footer />
        </div>
    );
};

export default NikeZoom;