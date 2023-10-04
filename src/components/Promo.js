import React from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

const Promo = () => {
    return (
        <div>
            <div className='image-promo'>
                <h2 className='title-nike4'>Nike Air Zoom Version 2</h2>
                <div className='buttons-1'>
                    <Link to="/description-nike-air-zoom-promo" className='link-1'><p className='paragraph-plus'>Voir plus</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Promo;