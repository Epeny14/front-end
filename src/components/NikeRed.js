// import React from 'react';
import React, { useEffect, useState } from 'react';
// import Img79 from '../img/basket-shop.jpg';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
import Img82 from '../img/Back.png';
import Img83 from '../img/Forward.png';
import Img84 from '../img/iStock - Adidas - 1.jpg';
import Img85 from '../img/iStock - Adidas - 2.jpg';
import Img86 from '../img/Canva - Basket - 30.png';
import '../styles/zoom-red.css';
import axios from 'axios';

const NikeRed = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://blaise.startwin.fr/home')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);
    return (
        <div>
            <div className='sections-descriptions'>
                <div className='under-description'>
                    <div className='img-section-100'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='nike-air-red' src={item.imageUrl} alt={item.nom} />

                            </div>
                        ))}
                    </div>
                    <div className='section-description-15'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <h1 className='titles-descriptions-red-11'>{item.nom}</h1>
                                <div className='stars-11'>
                                    <img src={Img80} alt='star' className='img-star'></img>
                                    <img src={Img80} alt='star' className='img-star'></img>
                                    <img src={Img80} alt='star' className='img-star'></img>
                                    <img src={Img80} alt='star' className='img-star'></img>
                                    <img src={Img80} alt='star' className='img-star'></img>
                                </div>
                                <p className='price-tag-red'>{item.prix}</p>
                                <p className='paragraph-nike-red'>{item.description} €</p><br />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className='flex-11'>

                    {data.map((item) => (
                        <div key={item.id}>
                           
                            <img className='nike-air-1' src={item.imageUrl} alt={item.nom} />
                            <h1 className='title-description-11'>{item.nom}</h1>
                            <p className='price-tag-50'>{item.prix}</p>
                            <p className='paragraph-50'>{item.description}</p><br />
                        </div>
                    ))} 
                     <div className='section-img-10'>
                        <img src={Img79} alt="basket" className='nike-air-1'></img>
                    </div>
                    <div className='description-1'>
                        <h1 className='title-description-11'>Nike Air Red</h1>
                        <p className='price-tag-50'>30,00 €</p>
                        <div className='stars-1'>
                            <img src={Img80} alt='star' className='img-star'></img>
                            <img src={Img80} alt='star' className='img-star'></img>
                            <img src={Img80} alt='star' className='img-star'></img>
                            <img src={Img80} alt='star' className='img-star'></img>
                            <img src={Img80} alt='star' className='img-star'></img>
                        </div>
                        <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div>

                        <p className='paragraph-50'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        <h2 className='title-50'>Couleurs : Rouge, blanche</h2>
                    </div>
                </div> */}
            </div>
            <div className='flex-40'>
                <div className='under-flex-40'>
                    <div className='title-zoom'>
                        <h1 className='under-title-zoom-1'>Vous aimerez peut-être aussi</h1>
                    </div>
                    <div className='icon-zoom'>
                        <div className='back-zoom'>
                            <img src={Img82} alt="back" className='img-back'></img>
                        </div>
                        <div className='forward-zoom'>
                            <img src={Img83} alt="forward" className='img-forward'></img>
                        </div>
                    </div>
                </div>
                <div className='flex-image-1'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-zoom-1'></img>
                        <h1 className='title-zoom-100'>Adidas Zoom React</h1>
                        <p className='paragraph-zoom-100'>30,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-zoom-2'></img>
                        <h1 className='title-zoom-200'>Adidas Zoom React V2</h1>
                        <p className='paragraph-zoom-200'>60,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-zoom-3'></img>
                        <h1 className='title-zoom-300'>Crossover Air Zoom</h1>
                        <p className='paragraph-zoom-300'>40,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NikeRed;