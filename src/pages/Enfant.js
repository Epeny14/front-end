import React from 'react';
import Header from '../components/Header';
import SectionChild from '../components/SectionChild';
import ArticleChildren from '../components/ArticleChildren';
import ChildShoes from '../components/ChildShoes';
import WeekChild from '../components/WeekChild';
import SearchKids from '../components/SearchKids';
import Footer from '../components/Footer';

const Enfant = () => {
    return (
        <div>
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