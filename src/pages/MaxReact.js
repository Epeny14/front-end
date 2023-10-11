import React from 'react';
import Header from '../components/Header';
import HomeReact from '../components/HomeReact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const MaxReact = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la description Nike Air Max 270 React</title>
                <meta name="description" content="Shopsports -  la description Nike Air Max 270 React" />

            </Helmet>
            <Header />
            <HomeReact />
            <Footer />
        </div>
    );
};

export default MaxReact;