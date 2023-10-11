import React from 'react';
import Header from '../components/Header';
import SectionWomen from '../components/SectionWomen';
import SectionWeek from '../components/SectionWeek';
import SelectionWomen from '../components/SelectionWomen';
import PromoWomen from '../components/PromoWomen';
import SearchWomen from '../components/SearchWomen';
import ArticleWomen from '../components/ArticleWomen';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Femme = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - la page Femme</title>
                <meta name="description" content="Shopsports -  la page Femme" />

            </Helmet>
            <Header />
            <SectionWomen />
            <SectionWeek />
            <SelectionWomen />
            <PromoWomen />
            <SearchWomen />
            <ArticleWomen />
            <Footer />
        </div>
    );
};

export default Femme;