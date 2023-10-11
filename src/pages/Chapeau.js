import React from 'react';
import Header from '../components/Header';
import SectionChapeau from '../components/SectionChapeau';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const Chapeau = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la page chapeau femmes</title>
                <meta name="description" content="Shopsports -  la page chapeau femmes" />

            </Helmet>
            <Header />
            <SectionChapeau />
            <Footer />
        </div>
    );
};

export default Chapeau;