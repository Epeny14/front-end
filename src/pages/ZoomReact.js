import React from 'react';
import Header from '../components/Header';
import MenZoom from '../components/MenZoom';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ZoomReact = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la déscription Zoom React V3</title>
                <meta name="description" content="Shopsports - la déscription Zoom React V3" />

            </Helmet>
            <Header />
            <MenZoom />
            <Footer />
        </div>
    );
};

export default ZoomReact;