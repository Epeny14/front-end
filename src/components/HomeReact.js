import React from 'react';
import Img79 from '../img/Basket-2.png';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
import Img82 from '../img/Back.png';
import Img83 from '../img/Forward.png';
import Img84 from '../img/Canva - casquette - 1.png';
import Img85 from '../img/Canva - Nike - 14.png';
import Img86 from '../img/Nike - ballon - 1.png';
import '../styles/home-react.css';

const HomeReact = () => {
    return (
        <div>
            <div className='section-description-air'>
                <div className='flex-air-11'>
                    <div className='section-img-10'>
                        <img src={Img79} alt="basket" className='nike-air-2'></img>
                    </div>
                    <div className='description-1'>
                        <h1 className='title-description-air'>Nike Air Max</h1>
                        <p className='price-tag-air'>50,00 €</p>
                        <div className='stars-air'>
                            <img src={Img80} alt='star' className='img-star-air'></img>
                            <img src={Img80} alt='star' className='img-star-air'></img>
                            <img src={Img80} alt='star' className='img-star-air'></img>
                            <img src={Img80} alt='star' className='img-star-air'></img>
                            <img src={Img80} alt='star' className='img-star-air'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraph-air'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        <h2 className='title-air'>Couleurs : Rouge, blanche</h2>
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-45'>
                    <div className='title-zoom'>
                        <h1 className='under-title-air'>Vous aimerez peut-être aussi</h1>
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
                <div className='flex-image-air'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-zoom-air-1'></img>
                        <h1 className='title-zoom-air-1'>Nike Casquette </h1>
                        <p className='paragraph-zoom-air-1'>25,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-zoom-air-2'></img>
                        <h1 className='title-zoom-air-2'>Nike Zoom Air V10</h1>
                        <p className='paragraph-zoom-air-2'>60,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-zoom-air-3'></img>
                        <h1 className='title-zoom-air-3'>Nike Ballon</h1>
                        <p className='paragraph-zoom-air-3'>50,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReact;