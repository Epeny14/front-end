import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import Categories from '../components/Categories';
import Produit from '../components/Produit';
import Baskets from '../components/Baskets';
import Promo from '../components/Promo';
import Sections from '../components/Sections';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const Accueil = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - La page Accueil</title>
                <meta name="description" content="Shopsports - la page d'accueil" />

            </Helmet>
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