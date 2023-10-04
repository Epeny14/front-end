import React from 'react';
import Img42 from '../img/iStock-Leggins.jpg';
import '../styles/sectionwomen.css';

const SectionWomen = () => {
    return (
        <div>
            <div className='section-women'>
                <div className='text-section-1'>
                    <h1 className='title-15'>Nouvelles collections leggins</h1>
                    <p className='description-paragraph-1'>Découvert les nouvelles collections avec des bonne qualité</p>
                    <div className='button-10'>
                        <p className='paragraph-button-1'>Acheter</p>
                    </div>
                </div>
                <div className='img-women-1'>
                    <img src={Img42} alt='leggins' className='img-10'></img>
                </div>
            </div>
        </div>
    );
};

export default SectionWomen;