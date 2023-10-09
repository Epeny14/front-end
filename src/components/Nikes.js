import React from 'react';
import Img79 from '../img/nike-promo.jpg';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
import Img82 from '../img/Back.png';
import Img83 from '../img/Forward.png';
import Img84 from '../img/Nike Air Jordan - 1.png';
import Img85 from '../img/Canva - Nike - 50.png';
import Img86 from '../img/Ballon foot - Premierl League.jpg';
import '../styles/zoom-nikes.css';

const Nikes = () => {
    return (
        <div>
            <div className='section-description-promo'>
                <div className='flex-promo'>
                    <div className='section-img-promo'>
                        <img src={Img79} alt="basket" className='nike-air-promo'></img>
                    </div>
                    <div className='description-promo'>
                        <h1 className='title-description-promo'>Nike Zoom Version - 2</h1>
                        <p className='price-tag-promo'>90,00 €</p>
                        <div className='stars-promo'>
                            <img src={Img80} alt='star' className='img-star-promo'></img>
                            <img src={Img80} alt='star' className='img-star-promo'></img>
                            <img src={Img80} alt='star' className='img-star-promo'></img>
                            <img src={Img80} alt='star' className='img-star-promo'></img>
                            <img src={Img80} alt='star' className='img-star-promo'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraph-promo'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        <h2 className='title-promo'>Couleurs : Rouge, blanche</h2>
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-promo'>
                    <div className='title-zooms'>
                        <h1 className='under-title-zooms'>Vous aimerez peut-être aussi</h1>
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
                <div className='flex-promo-1'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-promo-1'></img>
                        <h1 className='title-promos-1'>Nike Air Jordan V3</h1>
                        <p className='paragraph-promo-1'>150,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-promo-2'></img>
                        <h1 className='title-promo-2'>Nike Air Max V7</h1>
                        <p className='paragraph-promo-2'>70,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-promo-3'></img>
                        <h1 className='title-promo-3'>Ballon foot - Premier League</h1>
                        <p className='paragraph-promo-3'>40,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nikes;