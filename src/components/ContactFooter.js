// import React from 'react';
import React, { useState } from 'react';
import "../styles/footer-contact.css";
import Img14 from "../img/Facebook.png";
import Img15 from "../img/Instagram.png";
import Img16 from "../img/Twitter.png";
import Img17 from "../img/Pinterest.png";
import Img18 from "../img/logo-shopsports.png";
import Img19 from "../img/Copyright.png";

const ContactFooter = () => {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Le formulaire a été enregistré avec succès
                alert("Vous êtes bien inscrit à newsletter");
                // Réinitialisez le formulaire ou redirigez l'utilisateur si nécessaire
            } else {
                // Gérez les erreurs ici
                alert("L' inscription a échoué");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="footer-contact">
                <div className='section-newsletter'>
                    <div className='newsletter-text'>
                        <h4 className='title-newsletter'>Abonnez-vous à notre newsletter</h4>
                    </div>
                    <div className='section-form'>
                        <form onSubmit={handleSubmit}>
                            <input className='form-newsletter' type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Votre adresse mail" required></input>
                            <button type="submit" className="btn-newsletter">S'inscrire</button>
                        </form>
                    </div>
                </div>
                <hr className='border-newsletter'></hr>
                <div className='menu-footer'>
                    <div className='under-menu-footer-1'>
                        <ul>
                            <li className='list-footer'>Navigation</li><br />
                            <li className='list-footer'>Homme</li><br />
                            <li className='list-footer'>Femme</li><br />
                            <li className='list-footer'>Enfants</li><br />
                            <li className='list-footer'>Nouveautés</li>
                        </ul>
                    </div>
                    <div className='under-menu-footer-2'>
                        <ul>
                            <li className='list-footer'>A propos de ShopSports</li><br />
                            <li className='list-footer'>Actualités</li><br />
                            <li className='list-footer'>Nous contacter</li><br />
                        </ul>
                    </div>
                    <div className='under-menu-footer-3'>
                        <ul>
                            <li className='list-footer'>Réseaux sociaux</li><br />
                            <div className='logo-social'>
                                <img className="logo-facebook" src={Img14} alt="logo-facebook"></img>
                                <img className="logo-instagram" src={Img15} alt="logo-instagram"></img>
                                <img className="logo-twitter" src={Img16} alt="logo-twitter"></img>
                                <img className='logo-pinterest' src={Img17} alt="logo-pinterest"></img>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr className='border-newsletter-2'></hr>
                <div className="copyright-footer">
                    <img src={Img18} className='logo-shopsports' alt="logo-shopsports"></img>
                    <img src={Img19} className='logo-copyright' alt="logo-copyright"></img>
                    <p className="copyright-date">2023</p>
                </div>
            </div>
        </div>
    );
};

export default ContactFooter;