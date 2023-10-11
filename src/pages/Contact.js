import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ContactFooter from '../components/ContactFooter';
import { Helmet } from 'react-helmet';


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Shopsports - La page Contact</title>
                <meta name="description" content="Shopsports - la page contact" />

            </Helmet>
            <Header />
            <ContactForm />
            <ContactFooter />
        </div>
    );
};

export default Contact;