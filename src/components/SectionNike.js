// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img80 from '../img/Star.png';
import axios from 'axios';
import '../styles/zoom-style.css';

const SectionNike = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://blaise.startwin.fr/nike-zoom-react')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div className='flex-nike-100'>
            <div className='sections-description-nike-zoom'>
                <div className='under-description-red'>
                    <div className='img-section-100'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='nike-air-reds-1' src={item.imageUrl} alt={item.nom} />

                            </div>
                        ))}
                    </div>
                    <div className='section-description-151'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <h1 className='titles-descriptions-red-1'>{item.nom}</h1>
                                <div className='stars-121'>
                                    <img src={Img80} alt='star' className='img-star-211'></img>
                                    <img src={Img80} alt='star' className='img-star-211'></img>
                                    <img src={Img80} alt='star' className='img-star-211'></img>
                                    <img src={Img80} alt='star' className='img-star-211'></img>
                                    <img src={Img80} alt='star' className='img-star-211'></img>
                                </div>
                                <p className='price-tag-red-07'>{item.prix} €</p>
                                <p className='paragraph-nike-red-07'>{item.description}</p><br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionNike;