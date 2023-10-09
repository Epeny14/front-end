import React from 'react';
import Img42 from '../img/iStock-Leggins.jpg';
import '../styles/sectionwomen.css';
import { Link } from 'react-router-dom';

const SectionWomen = () => {
    return (
        <div>
            <div className='section-women'>
                <div className='text-section-1'>
                    <h1 className='title-15'>Nouvelles collections leggins</h1>
                    <p className='description-paragraph-1'>Découvert les nouvelles collections avec des bonne qualité</p>
                    <div className='button-10'>
                        <Link className='link-women' to="/femme-catalogue"><p className='paragraph-button-1'>Voir plus</p></Link>
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