import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Categories from '../components/Categories';
import Produit from '../components/Produit';
import Baskets from '../components/Baskets';
import Promo from '../components/Promo';
import Sections from '../components/Sections';
import Footer from '../components/Footer';


const Accueil = () => {
    return (
        <div>
            <Header />
            <Background />
            <Categories />
            <Produit />
            <Baskets />
            <Promo />
            <Sections />
            <Footer />
        </div>
    );
};

export default Accueil;