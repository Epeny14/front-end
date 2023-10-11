import React from 'react';
import Header from '../components/Header';
import Reebok from '../components/Reebok';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ReebokMen = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la déscription Reebok Shaq Fu</title>
                <meta name="description" content="Shopsports - la déscription Reebok Shaq Fu" />

            </Helmet>
            <Header />
            <Reebok />
            <Footer />
        </div>
    );
};

export default ReebokMen;