import React from 'react';
import Img60 from '../img/Enfants.jpg';
import '../styles/section-child.css';

const SectionChild = () => {
    return (
        <div>
            <div className='section-children'>
                <div className='section-text-50'>
                    <h1 className='title-child-1'>Preparer la rentrée ensemble</h1>
                    <p className='paragraph-child-1'>Découvre tous les produits pour bien démarrer la rentrée</p>
                    <div className='button-children'>
                        <p className='paragraph-child-2'>Acheter</p>
                    </div>
                </div>
                <div className='img-children-1'>
                    <img src={Img60} alt='children' className='img-child-1'></img>
                </div>
            </div>
        </div>
    );
};

export default SectionChild;