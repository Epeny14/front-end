import React from 'react';
import Img79 from '../img/Design sans titre (6).png';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
// import Img82 from '../img/Back.png';
// import Img83 from '../img/Forward.png';
import Img84 from '../img/Flickr - Nike - 2.jpg';
import Img85 from '../img/Flickr - Nike - 3.jpg';
import Img86 from '../img/Flickr - Nike - 4.jpg';
import '../styles/nike-air.css';

const NikeAirs = () => {
    return (
        <div>
            <div className='section-description-50'>
                <div className='flex-200'>
                    <div className='section-img-react'>
                        <img src={Img79} alt="basket" className='nike-air-199'></img>
                    </div>
                    <div className='description-react'>
                        <h1 className='title-description-880'>Nike Air React</h1>
                        <p className='price-tag-react'>50,30 €</p>
                        <div className='stars-react'>
                            <img src={Img80} alt='star' className='img-star-react'></img>
                            <img src={Img80} alt='star' className='img-star-react'></img>
                            <img src={Img80} alt='star' className='img-star-react'></img>
                            <img src={Img80} alt='star' className='img-star-react'></img>
                            <img src={Img80} alt='star' className='img-star-react'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraph-react'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        <h2 className='title-react'>Couleurs : Rouge, blanche</h2>
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-440'>
                    <div className='title-react'>
                        <h1 className='under-title-react'>Vous aimerez peut-être aussi</h1>
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
                <div className='flex-image-react'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-react-1'></img>
                        <h1 className='title-reacts-1'>Nike Air Zoom V25</h1>
                        <p className='paragraph-react-1'>100,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-react-2'></img>
                        <h1 className='title-reacts-2'>Sneakers  React Zoom V3</h1>
                        <p className='paragraph-react-2'>50,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-react-3'></img>
                        <h1 className='title-reacts-3'>Sneakees React Zoom V4</h1>
                        <p className='paragraph-react-3'>40,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NikeAirs;