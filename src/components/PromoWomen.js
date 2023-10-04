// import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/baskethomme.css";
// import { Link } from 'react-router-dom';
import '../styles/promo-women.css';
// import Img52 from '../img/Basket-Femme_4.jpg';

const PromoWomen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/nike')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='section-promo-1'>
                <div className='under-section-promo-1'>
                    <div className='text-promo'>
                        <h1 className='title-promo-1'>50 % de réduction</h1>
                        {/* <p className='paragraph-promo-10'>Shopsports vous propose minimum <br></br>
                            55% de réduction ou jusquà 80 % <br></br>
                            de réduction sur la basket nike
                        </p> */}

                        {data.map((item) => (
                            <div key={item.id}>

                                {/* <Link to='' className='link-1'><h2 className='title-react-v3'>{item.nom}</h2></Link>*/}
                                <p className='paragraph-promo-10'>{item.description}</p> <br />
                            </div>
                        ))}
                    </div>
                    {/* <div className='section-timer'>
                        <div className='day'>
                            <h1 className='title-timer-1'>422</h1>
                            <p className='paragraph-timer-1'>jours</p>
                        </div>
                        <div className='hours'>
                            <h1 className='title-timer-2'>03</h1>
                            <p className='paragraph-timer-2'>heures</p>
                        </div>
                        <div className='minute'>
                            <h1 className='title-timer-3'>34</h1>
                            <p className='paragraph-timer-3'>minutes</p>
                        </div>
                        <div className='second'>
                            <h1 className='title-timer-4'>35</h1>
                            <p className='paragraph-timer-4'>second</p>
                        </div>
                    </div> */}
                    <div className='button-promo-15'>
                        <p className='paragraph-button-10'>Voir plus</p>
                    </div>
                </div>
                <div className='under-section-promo-1'>
                    {/* <img src={Img52} alt='nike' className='nike-promo-1'></img> */}

                    {data.map((item) => (
                        <div key={item.id}>
                            <img className='nike-promo-1' src={item.imageUrl} alt={item.nom} />
                            {/* <Link to='' className='link-1'><h2 className='title-react-v3'>{item.nom}</h2></Link>
                            <p className='price-sneakers-1'>{item.prix} €</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromoWomen;