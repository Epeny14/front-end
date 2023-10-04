import React from 'react';
import Img20 from "../img/T shirt.jpg";
import "../styles/section-homme.css";
import { Link } from 'react-router-dom';

const SectionHomme = () => {
    return (
        <div>
            <div className='section-homme'>
                <div className='section-text-2'>
                    <h1>Les nouvelles collections des t-shirt</h1>
                    <p className='paragraph-homme'>Très confortable. Bonne qualité. Grand choix des t-shirts avec différentes tailles et couleurs.</p>
                    <div className='button-homme'>
                        <Link to="/t-shirt" className='link-1'><p className='under-paragraph1'>Acheter</p></Link>
                    </div>
                </div>

                <div className='section-images1'>
                    <img className='shirt-homme-1' src={Img20} alt="T Shirt"></img>
                </div>
            </div>
        </div>
    );
};

export default SectionHomme;