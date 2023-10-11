import React from 'react';
import Img79 from '../img/Design sans titre (5).png';
import Img80 from '../img/Star.png';
// import Img81 from '../img/Fire.png';
// import Img82 from '../img/Back.png';
// import Img83 from '../img/Forward.png';
import Img84 from '../img/Flickr - Nike - 5.jpg';
import Img85 from '../img/Flickr - Nike - 6.jpg';
import Img86 from '../img/Flickr - Nike - 7.jpg';
import '../styles/maximum-air.css';


const Maximum = () => {
    return (
        <div>
            <div className='section-description-nike'>
                <div className='flex-nike'>
                    <div className='section-img-180'>
                        <img src={Img79} alt="basket" className='nike-air'></img>
                    </div>
                    <div className='description-nike-1'>
                        <h1 className='title-description-nike'>Nike Air Max</h1>
                        <p className='price-tag-nike'>35,30 €</p>
                        <div className='stars-nike'>
                            <img src={Img80} alt='star' className='img-star-nike'></img>
                            <img src={Img80} alt='star' className='img-star-nike'></img>
                            <img src={Img80} alt='star' className='img-star-nike'></img>
                            <img src={Img80} alt='star' className='img-star-nike'></img>
                            <img src={Img80} alt='star' className='img-star-nike'></img>
                        </div>
                        {/* <div className='paragraph-fire'>
                            <img src={Img81} alt='fire' className='img-fire'></img>
                            <p className='under-fire-1'>20 articles vendus au cours des dernières 23 heures</p>
                        </div> */}

                        <p className='paragraph-nike-1'>La caractéristique principale des Nike Air Red est la technologie Red Air,<br />
                            qui consiste en des unités d'amorti remplies d'air situées dans la semelle <br /> intermédiaire de la chaussure.
                            Ces unités d'air comprimé offrent un amorti <br /> réactif qui permet aux athlètes de bénéficier d'une excellente restitution de l'énergie, <br />
                            ce qui les aide à optimiser leur performance.
                        </p>
                        {/* <h2 className='title-55'>Couleurs : Rouge, blanche</h2> */}
                        {/* <div className='button-cart-1'>
                            <p className='paragraph-cart-1'>Ajouter au panier</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex-40'>
                <div className='under-flex-nike'>
                    <div className='title-zoom-49'>
                        <h1 className='under-title-zoom-540'>Vous aimerez peut-être aussi</h1>
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
                <div className='flex-image-141'>
                    <div className='section-zoom-1'>
                        <img src={Img84} alt="basket" className='img-zoom-nike-11'></img>
                        <h1 className='title-zoom-nike-11'>Nike Air Jordan V3</h1>
                        <p className='paragraph-zoom-nike-1'>150,00 €</p>
                    </div>
                    <div className='section-zoom-2'>
                        <img src={Img85} alt="basket" className='img-zoom-nike-12'></img>
                        <h1 className='title-zoom-nike-12'>Nike Air Max V7</h1>
                        <p className='paragraph-zoom-nike-2'>70,00 €</p>
                    </div>
                    <div className='section-zoom-3'>
                        <img src={Img86} alt="basket" className='img-zoom-nike-13'></img>
                        <h1 className='title-zoom-nike-13'>Ballon foot - Premier League</h1>
                        <p className='paragraph-zoom-nike-3'>40,00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maximum;