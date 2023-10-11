// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img80 from '../img/Star.png';
import axios from 'axios';
import '../styles/nike-style-1.css';

const ReactNike = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://blaise.startwin.fr/nike-zoom')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (

        <div className='flex-nike-400'>
            <div className='sections-description-nike-zoom-1'>
                <div className='under-description-red'>
                    <div className='img-section-100'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='nike-air-react-11' src={item.imageUrl} alt={item.nom} />

                            </div>
                        ))}
                    </div>
                    <div className='section-description-159'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <h1 className='titles-descriptions-react-1'>{item.nom}</h1>
                                <div className='stars-110'>
                                    <img src={Img80} alt='star' className='img-star-210'></img>
                                    <img src={Img80} alt='star' className='img-star-210'></img>
                                    <img src={Img80} alt='star' className='img-star-210'></img>
                                    <img src={Img80} alt='star' className='img-star-210'></img>
                                    <img src={Img80} alt='star' className='img-star-210'></img>
                                </div>
                                <p className='price-tag-red-50'>{item.prix} €</p>
                                <p className='paragraph-nike-react-50'>{item.description}</p><br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReactNike;