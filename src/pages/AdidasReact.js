import React from 'react';
import Header from '../components/Header';
import MenAdidas from '../components/MenAdidas';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AdidasReact = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la déscription Adidas React V2</title>
                <meta name="description" content="Shopsports - la page la déscription Adidas React V2" />

            </Helmet>
            <Header />
            <MenAdidas />
            <Footer />
        </div>
    );
};

export default AdidasReact;