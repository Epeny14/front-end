// import React from 'react';
// import Img63 from '../img/Basket - enfant (1).jpg';
// import Img64 from '../img/Basket - enfant (2).jpg';
// import Img65 from '../img/Basket - enfant (3).jpg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/baskethomme.css";
import { Link } from 'react-router-dom';
import Img67 from '../img/Back.png';
import Img68 from '../img/Forward.png';
import '../styles/child-shoes.css';

const ChildShoes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/enfants')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='shoes-kids'>
                <div className='under-shoes-1'>
                    <div className='title-shoes-11'>
                        <h1 className='under-title-shoes-1'>Les chaussures</h1>
                    </div>
                    <div className='section-shoes-11'>
                        <div className='shoes-back-1'>
                            <img src={Img67} alt="icon-back-40" className="icon-back-40"></img>
                        </div>
                        <div className='shoes-forward-1'>
                            <img src={Img68} alt="icon-forward-40" className="icon-forward-40"></img>
                        </div>
                    </div>
                </div>
                <div className='flex-shoes-1'>
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='img-shoes-1' src={item.imageUrl} alt={item.nom} />
                                <Link to='' className='link-1'><h2 className='title-shoes-12'>{item.nom}</h2></Link>
                                <p className='price-tag-1'>{item.prix} €</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='under-shoes-2'>
                        <img src={Img63} alt='basket' className='img-shoes-1'></img>
                        <h2 className='title-shoes-12'>Basket React V7</h2>
                        <p className='price-tag-1'>30,10 €</p>
                    </div>
                    <div className='under-shoes-3'>
                        <img src={Img64} alt='basket' className='img-shoes-2'></img>
                        <h2 className='title-shoes-13'>Basket React V8</h2>
                        <p className='price-tag-2'>20,99 €</p>
                    </div>
                    <div className='under-shoes-4'>
                        <img src={Img65} alt='basket' className='img-shoes-3'></img>
                        <h2 className='title-shoes-14'>Basket React V10</h2>
                        <p className='price-tag-3'>50,00 €</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ChildShoes;