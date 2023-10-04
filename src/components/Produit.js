// import React from 'react';
import React, { useEffect, useState } from 'react';
import "../styles/produit.css";
// import Img8 from "../img/basket-shop.jpg";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Produit = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/home')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='produits'>
                <div class="section-text1">
                    <h2 className='text1'>Produits Populaires</h2>
                    {data.map((item) => (
                        <div key={item.id}>
                            <p className='paragraph-lorem'>{item.description}</p><br />
                        </div>
                    ))}
                    <div class="button-3">
                        <Link to="/description-nike-air-red" className='link-1'><p className='under-button'>Voir plus</p></Link>
                    </div>
                </div>
                <div className='section-image1'>
                    {data.map((item) => (
                        <div key={item.id}>
                            <img className='img-nike' src={item.imageUrl} alt={item.nom} />
                            <h2 className='title-nike2'>{item.nom}</h2>
                            <p className='price'>{item.prix} €</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Produit;