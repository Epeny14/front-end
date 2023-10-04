import React from 'react';
import Img79 from '../img/basketballs-215874_1280.jpg';
import Img80 from '../img/Star.png';
import Img81 from '../img/Fire.png';
import Img82 from '../img/Back.png';
import Img83 from '../img/Forward.png';
import Img84 from '../img/Pixabay - basketball - 1.jpg';
import Img85 from '../img/Pixabay - basketball - 2.jpg';
import Img86 from '../img/Pixabay - jersey - 1.jpg';
import '../styles/ball.css';

const Ball = () => {
    return (
        <div>
            <div className='section-description'>
                <div className='flex-11'>
                    <div className='section-img-10'>
                        <img src={Img79} alt="basket" className='nike-air-1'></img>
                    </div>
                    <div className='description-1'>
                        <h1 className='title-description-11'>Ballon de basket</h1>
                        <p className='price-tag-50'>70,00 €</p>
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
                        <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-40'>
                    <div className='title-zoom'>
                        <h1 className='under-title-zoom'>Vous aimerez peut-être aussi</h1>
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
                        <h1 className='title-zoom-1'>Spalding</h1>
                        <p className='paragraph-zoom-1'>90,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-zoom-2'></img>
                        <h1 className='title-zoom-2'>Spalding - TF 1000</h1>
                        <p className='paragraph-zoom-2'>70,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-zoom-3'></img>
                        <h1 className='title-zoom-3'>Maillots NBA Chicago Bulls</h1>
                        <p className='paragraph-zoom-3'>50,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ball;