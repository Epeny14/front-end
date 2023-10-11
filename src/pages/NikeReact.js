import React from 'react';
import ReactNike from '../components/ReactNike';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const NikeReact = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Nike Zoom React</title>
                <meta name="description" content="Shopsports -  la description Nike Zoom React" />

            </Helmet>
            <Header />
            <ReactNike />
            <Footer />
        </div>
    );
};

export default NikeReact;