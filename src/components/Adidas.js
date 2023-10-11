import React from 'react';
import Img79 from '../img/Football-1.png';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
// import Img82 from '../img/Back.png';
// import Img83 from '../img/Forward.png';
import Img84 from '../img/Canva - Ballon football - 1.png';
import Img85 from '../img/Canva - Ballon football - 2.png';
import Img86 from '../img/Canva - Maillot de foot - 1.png';
import '../styles/adidas.css';

const Adidas = () => {
    return (
        <div>
            <div className='section-description-adidas'>
                <div className='flex-adidas'>
                    <div className='section-img-120'>
                        <img src={Img79} alt="basket" className='nike-air-adidas'></img>
                    </div>
                    <div className='description-adidas'>
                        <h1 className='title-description-adidas'>Ballon Adidas</h1>
                        <p className='price-tag-adidas'>40,00 €</p>
                        <div className='stars-adidas'>
                            <img src={Img80} alt='star' className='img-star-adidas'></img>
                            <img src={Img80} alt='star' className='img-star-adidas'></img>
                            <img src={Img80} alt='star' className='img-star-adidas'></img>
                            <img src={Img80} alt='star' className='img-star-adidas'></img>
                            <img src={Img80} alt='star' className='img-star-adidas'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraph-adidas'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        {/* <h2 className='title-adidas'>Couleurs : Rouge, blanche</h2> */}
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-adidas'>
                    <div className='title-zoom-adidas'>
                        <h1 className='under-title-adidas'>Vous aimerez peut-être aussi</h1>
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
                <div className='flex-image-adidas'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-adidas-1'></img>
                        <h1 className='title-adidas-1'>Ballon de football doré</h1>
                        <p className='paragraph-adidas-1'>50,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-adidas-2'></img>
                        <h1 className='title-adidas-2'>Ballon de foot - Crossover</h1>
                        <p className='paragraph-adidas-2'>20,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-adidas-3'></img>
                        <h1 className='title-adidas-3'>Maillot de foot</h1>
                        <p className='paragraph-adidas-3'>10,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adidas;