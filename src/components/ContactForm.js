import React, { useState } from 'react';
import '../styles/contact.css';


const ContactForm = () => {

    const [messages, setMessages] = useState('');
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://blaise.startwin.fr/formulaires', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Le formulaire a été enregistré avec succès
                setMessages('Votre message à été bien envoyé !')
                // Réinitialisez le formulaire ou redirigez l'utilisateur si nécessaire
            } else {
                // Gérez les erreurs ici
                setMessages('Une erreur s\'est produite lors de la soumission du formulaire.');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className='section-contact'>


                <div className='section-forms'>

                    <form className='contact-form' onSubmit={handleSubmit}>
                        <h1 className='title-contact-1'>Contactez-nous</h1>
                        <div className='flex-form'>
                            <div className='under-flex-form-1'>
                                <div className='lastname'>
                                    <label className='label-lastname'>Nom</label><br />
                                    <input type="text" name="nom" className='input' placeholder='Nom' value={formData.nom} onChange={handleChange} required /><br />
                                </div>
                                <div className='firstname'>
                                    <label className='label-firstname'>Prenom</label><br />
                                    <input type="text" name="prenom" className='input' placeholder='Prenom' value={formData.prenom} onChange={handleChange} required /><br />
                                </div>
                            </div>
                            {/* <div className='under-flex-form-2'>
                                <label>Nom</label><br />
                                <input type="text" name="nom" className='input' placeholder='Nom' value={formData.nom} onChange={handleChange} required /><br />
                                <label>Prenom</label><br />
                                <input type="text" name="prenom" className='input' placeholder='Prenom' value={formData.prenom} onChange={handleChange} required /><br />
                                <label>Adresse mail</label><br />
                                <input type="email" name="email" className='input' placeholder='Adresse mail' value={formData.email} onChange={handleChange} required /><br />
                            </div> */}
                        </div>

                        <label className='label-message'>Message</label><br />
                        <textarea name="message" placeholder='Votre message' value={formData.message} onChange={handleChange} required></textarea><br />
                        <button className='form-button' type="submit">Envoyer</button>
                    </form>
                    {messages && <div>{messages}</div>}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;