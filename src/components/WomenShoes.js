import React from 'react';
import Img1 from '../img/Canva-shoes-16.png';
import Img2 from '../img/Canva-shoes-13.png';
import Img3 from '../img/Canva-shoes-4.png';
import '../styles/shoes-women.css';

const WomenShoes = () => {
    return (
        <div>
            <div className='section-shoes-10'>
                <div className='shoes-1'>
                    <img src={Img1} className='img-shoes-20' alt='chaussure'></img>
                    <h1 className='title-shoes-1'>Shopsports Rose V3</h1>
                    <p className='shoes-price'>40.00 €</p>
                </div>
                <div className='shoes-2'>
                    <img src={Img2} className='img-shoes-21' alt='chaussure'></img>
                    <h1 className='title-shoes-1'>Shopsports Zoom V3</h1>
                    <p className='shoes-price'>60.00 €</p>
                </div>
                <div className='shoes-3'>
                    <img src={Img3} className='img-shoes-22' alt='chaussure'></img>
                    <h1 className='title-shoes-1'>Shopsports Rose V4</h1>
                    <p className='shoes-price'>50.00 €</p>
                </div>
            </div>
        </div>
    );
};

export default WomenShoes;