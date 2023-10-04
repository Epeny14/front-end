import React from 'react';
import Header from '../components/Header';
import SectionHomme from '../components/SectionHomme';
import BasketHomme from '../components/BasketHomme';
import SportHomme from '../components/SportHomme';
import Menshoes from '../components/Menshoes';
import ArticleMen from '../components/ArticleMen';
import Footer from '../components/Footer';

const Homme = () => {
    return (
        <div>
            <Header />
            <SectionHomme />
            <BasketHomme />
            <SportHomme />
            <Menshoes />
            <ArticleMen />
            <Footer />
        </div>
    );
};

export default Homme;