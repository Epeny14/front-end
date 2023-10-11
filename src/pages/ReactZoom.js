import React from 'react';
import Header from '../components/Header';
import ZoomReact from '../components/ZoomReact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ReactZoom = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la déscription Puma React V3</title>
                <meta name="description" content="Shopsports - la déscription Puma React V3" />

            </Helmet>
            <Header />
            <ZoomReact />
            <Footer />
        </div>
    );
};

export default ReactZoom;