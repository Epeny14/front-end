import React from 'react';
import Img79 from '../img/Air jordan - Nike.png';
// import React, { useEffect, useState } from 'react';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
// import Img82 from '../img/Back.png';
// import Img83 from '../img/Forward.png';
import Img84 from '../img/Nike Air Jordan.png';
import Img85 from '../img/Canva - Shoes - 11.png';
import Img86 from '../img/Canva - Shoes - 12.png';
import '../styles/air-max.css';
// import axios from 'axios';

const Max = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3001/basket/651c57cde997d5c4a1c0ee49')
    //         .then((response) => {
    //             setData(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Erreur lors de la récupération des données :', error);
    //         });
    // }, []);
    return (
        <div>
            <div className='section-descriptions'>
                {/* {data.map((item) => (
                    <div key={item.id}>
                        <img className='nike-air-max' src={item.imageUrl} alt={item.nom} />

                    </div>
                ))} */}
                {/* <div className='flexs-11'>
                    <div className='img-section-101'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='nike-air-max' src={item.imageUrl} alt={item.nom} />

                            </div>
                        ))}
                    </div>
                </div> */}
                <div className='flexs-11'>
                    <div className='section-imgs-10'>
                        <img src={Img79} alt="basket" className='nike-airs-1'></img>
                    </div>
                    <div className='descriptions-1'>
                        <h1 className='title-descriptions-11'>Nike Air Max 270 React</h1>
                        <p className='price-tag-100'>60,00 €</p>
                        <div className='stars-12'>
                            <img src={Img80} alt='star' className='img-stars-11'></img>
                            <img src={Img80} alt='star' className='img-stars-11'></img>
                            <img src={Img80} alt='star' className='img-stars-11'></img>
                            <img src={Img80} alt='star' className='img-stars-11'></img>
                            <img src={Img80} alt='star' className='img-stars-11'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraphs-50'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        {/* <p className='titles-50'>Couleurs : Rouge, blanche</p> */}
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-40'>
                    <div className='title-zoom-max'>
                        <h1 className='under-title-zoom-max'>Vous aimerez peut-être aussi</h1>
                    </div>
                    {/* <div className='icon-zoom'>
                        <div className='back-zoom'>
                            <img src={Img82} alt="back" className='img-back'></img>
                        </div>
                        <div className='forward-zoom'>
                            <img src={Img83} alt="forward" className='img-forward'></img>
                        </div>
                    </div> */}
                </div>
                <div className='flex-image-1'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-zoom-max-1'></img>
                        <h1 className='title-zoom-max-1'>Nike Air Jordan</h1>
                        <p className='paragraph-zoom-max'>135,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-zoom-max-2'></img>
                        <h1 className='title-zoom-max-2'>Crossover Shoes V5</h1>
                        <p className='paragraph-zoom-max'>20,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-zoom-max-3'></img>
                        <h1 className='title-zoom-max-3'>Crossover Air Max</h1>
                        <p className='paragraph-zoom-max'>40,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Max;