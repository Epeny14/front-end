import React from 'react';
import Img79 from '../img/Design sans titre (3).png';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
// import Img82 from '../img/Back.png';
// import Img83 from '../img/Forward.png';
import Img84 from '../img/Flickr - Adidas - 2.jpg';
import Img85 from '../img/Flickr - Adidas - 4.jpg';
import Img86 from '../img/Flickr - Adidas -3.jpg';
import '../styles/men-adidas.css';

const MenAdidas = () => {
    return (
        <div>
            <div className='section-description-men'>
                <div className='flex-men'>
                    <div className='section-img-mens'>
                        <img src={Img79} alt="basket" className='nike-air-men'></img>
                    </div>
                    <div className='description-mens'>
                        <h1 className='title-description-men'>Adidas React V2</h1>
                        <p className='price-tag-men'>44,30 €</p>
                        <div className='stars-men'>
                            <img src={Img80} alt='star' className='img-star-men'></img>
                            <img src={Img80} alt='star' className='img-star-men'></img>
                            <img src={Img80} alt='star' className='img-star-men'></img>
                            <img src={Img80} alt='star' className='img-star-men'></img>
                            <img src={Img80} alt='star' className='img-star-men'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraph-mens'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        {/* <h2 className='title-men'>Couleurs : Rouge, blanche</h2> */}
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-40'>
                    <div className='title-zoom-men'>
                        <h1 className='under-title-zoom-men'>Vous aimerez peut-être aussi</h1>
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
                <div className='flex-image-men'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-zoom-men-1'></img>
                        <h1 className='title-zoom-men-1'>Adidas Max V10</h1>
                        <p className='paragraph-zoom-men-1'>90,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-zoom-men-2'></img>
                        <h1 className='title-zoom-men-2'>Adidas Max V5</h1>
                        <p className='paragraph-zoom-men-2'>50,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-zoom-men-3'></img>
                        <h1 className='title-zoom-men-3'>Adidas Green Max V12</h1>
                        <p className='paragraph-zoom-men-3'>60,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenAdidas;