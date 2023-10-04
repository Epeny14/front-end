import React, { useState } from 'react';
import '../styles/contact.css';


const ContactForm = () => {

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
            const response = await fetch('http://localhost:3000/formulaires', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Le formulaire a été enregistré avec succès
                alert("Le message a bien été envoyé");
                // Réinitialisez le formulaire ou redirigez l'utilisateur si nécessaire
            } else {
                // Gérez les erreurs ici
                alert("L' envoi du message a échoué");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className='section-contact'>
                <h1 className='title-contact-1'>Contactez-nous</h1>

                <div className='section-forms'>
                    <form onSubmit={handleSubmit}>
                        <label>Nom</label><br />
                        <input type="text" name="nom" className='input' placeholder='Nom' value={formData.nom} onChange={handleChange} /><br />
                        <label>Prenom</label><br />
                        <input type="text" name="prenom" className='input' placeholder='Prenom' value={formData.prenom} onChange={handleChange} /><br />
                        <label>Adresse mail</label><br />
                        <input type="email" name="email" className='input' placeholder='Adresse mail' value={formData.email} onChange={handleChange} /><br />
                        <label>Message</label><br />
                        <textarea name="message" placeholder='Votre message' value={formData.message} onChange={handleChange}></textarea><br />
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;