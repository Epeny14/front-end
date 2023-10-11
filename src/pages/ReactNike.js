import React from 'react';
import Header from '../components/Header';
import NikeReact from '../components/NikeReact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ReactNike = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la déscription Nike React V3</title>
                <meta name="description" content="Shopsports - la déscription Nike React V3" />

            </Helmet>
            <Header />
            <NikeReact />
            <Footer />
        </div>
    );
};

export default ReactNike;