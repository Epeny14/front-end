import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';
import MonImage from '../img/Logo.png';
import Img1 from '../img/Search.png';
// import Img2 from '../img/Buying.png';

const Header = () => {

    return (
        <div>
            <div className="header">
                <ul>
                    <NavLink to="/accueil" style={{ textDecoration: 'none' }}>
                        <li>
                            <img className='logo' src={MonImage} alt="Logo Shopsports"></img>
                        </li>
                    </NavLink>

                </ul>
                <ul className="under-header">
                    <NavLink to="/homme" style={{ textDecoration: 'none' }}>
                        <li className='list'>Homme</li>
                    </NavLink>
                    <NavLink to="/femme" style={{ textDecoration: 'none' }}>
                        <li className='list'>Femme</li>
                    </NavLink>
                    <NavLink to="/enfant" style={{ textDecoration: 'none' }}>
                        <li className='list'>Enfants</li>
                    </NavLink>
                    <NavLink to="/contact" style={{ textDecoration: 'none' }}>
                        <li className='list'>Contact</li>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink>
                        <li className='img-search'>
                            <img className='search' src={Img1} alt="L'icone recherche"></img>
                        </li>
                    </NavLink>
                </ul>
                <ul>
                    {/* <NavLink>
                        <li className='img-buying'>
                            <img className='buying' src={Img2} alt="L'icone caddie"></img>
                        </li>
                    </NavLink> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;