import React from 'react';
import SectionNike from '../components/SectionNike';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const ZoomNike = () => {

    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Nike Zoom React V 50</title>
                <meta name="description" content="Shopsports -  la description Nike Zoom React V 50" />

            </Helmet>
            <Header />
            <SectionNike />
            <Footer />
        </div>
    );
};

export default ZoomNike;