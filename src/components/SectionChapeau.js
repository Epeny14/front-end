import React from 'react';
import Img1 from '../img/hat-1.jpg';
import Img2 from '../img/chapeau-pixabay-2.jpg';
import Img3 from '../img/chapeau-pixabay-3.jpg';
import '../styles/hat.css';

const SectionChapeau = () => {
    return (
        <div>
            <div className='section-hat'>
                <div className='under-hat-1'>
                    <img className='hat-img-1' src={Img1} alt='chapeau'></img>
                    <h1 className='title-hat'>Chapeau Shopsports</h1>
                    <p className='price-hat'>50.00 €</p>
                </div>
                <div className='under-hat-2'>
                    <img className='hat-img-2' src={Img2} alt='chapeau'></img>
                    <h1 className='title-hat'>Chapeau React Zoom</h1>
                    <p className='price-hat'>30.00 €</p>
                </div>
                <div className='under-hat-3'>
                    <img className='hat-img-3' src={Img3} alt='chapeau'></img>
                    <h1 className='title-hat'>Chapeau React Zoom V2</h1>
                    <p className='price-hat'>40.00 €</p>
                </div>
            </div>
        </div>
    );
};

export default SectionChapeau;