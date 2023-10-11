import React from 'react';
import Header from '../components/Header';
import SectionChild from '../components/SectionChild';
import ArticleChildren from '../components/ArticleChildren';
import ChildShoes from '../components/ChildShoes';
import WeekChild from '../components/WeekChild';
import SearchKids from '../components/SearchKids';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Enfant = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - La page Enfants</title>
                <meta name="description" content="Shopsports - la page enfants" />

            </Helmet>
            <Header />
            <SectionChild />
            <ArticleChildren />
            <ChildShoes />
            <WeekChild />
            <SearchKids />
            <Footer />
        </div>
    );
};

export default Enfant;