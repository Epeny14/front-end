import React from 'react';
import Img79 from '../img/football-19448_1920.jpg';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
import Img82 from '../img/Back.png';
import Img83 from '../img/Forward.png';
import Img84 from '../img/Canva - Foot - 1.png';
import Img85 from '../img/Canva - Foot - 2.png';
import Img86 from '../img/Canva - Foot - 3.png';
import '../styles/shoes.css';

const Shoes = () => {
    return (
        <div>
            <div className='section-description-foot'>
                <div className='flex-foot'>
                    <div className='section-img-football'>
                        <img src={Img79} alt="basket" className='nike-air-foot'></img>
                    </div>
                    <div className='description-football'>
                        <h1 className='title-description-foot'>Chaussure de football</h1>
                        <p className='price-tag-foot'>70,00 €</p>
                        <div className='stars-foot'>
                            <img src={Img80} alt='star' className='img-star-foot'></img>
                            <img src={Img80} alt='star' className='img-star-foot'></img>
                            <img src={Img80} alt='star' className='img-star-foot'></img>
                            <img src={Img80} alt='star' className='img-star-foot'></img>
                            <img src={Img80} alt='star' className='img-star-foot'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraph-football'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        <h2 className='title-football'>Couleurs : Rouge, blanche</h2>
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-450'>
                    <div className='title-zoom-foot'>
                        <h1 className='under-title-zoom-foot'>Vous aimerez peut-être aussi</h1>
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
                        <img src={Img84} alt="basket" className='img-zoom-foot-1'></img>
                        <h1 className='title-zoom-foot-1'>Crampons React V1</h1>
                        <p className='paragraph-zoom-foot-1'>80,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-zoom-foot-2'></img>
                        <h1 className='title-zoom-foot-2'>Crampons React V2</h1>
                        <p className='paragraph-zoom-foot-2'>50,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-zoom-foot-3'></img>
                        <h1 className='title-zoom-foot-3'>Crampons React V3</h1>
                        <p className='paragraph-zoom-foot-3'>30,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shoes;