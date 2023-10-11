import React from 'react';
import Header from '../components/Header';
import NikeAirs from '../components/NikeAirs';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const NikeAir = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la déscription Nike Air React</title>
                <meta name="description" content="Shopsports - la déscription Nike Air React" />

            </Helmet>
            <Header />
            <NikeAirs />
            <Footer />
        </div>
    );
};

export default NikeAir;