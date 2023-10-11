import React from 'react';
import Header from '../components/Header';
import Zoom from '../components/Zoom';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AirZoom = () => {
    return (
        <div>
            <Helmet>
                <title>La Déscription Nike Air Zoom</title>
                <meta name="description" content="Shopsports - la page de déscription Nike Air Zoom" />

            </Helmet>
            <Header />
            <Zoom />
            <Footer />
        </div>
    );
};

export default AirZoom;