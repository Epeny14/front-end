// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img53 from '../img/Back.png';
import Img54 from '../img/Forward.png';
// import Img55 from '../img/Football.jpg';
// import Img56 from '../img/Basketball-canva-3.png';
// import Img57 from '../img/Tennis-canva-4.png';
import axios from 'axios';
import "../styles/baskethomme.css";
import { Link } from 'react-router-dom';
import '../styles/search-women.css';

const SearchWomen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/women')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='search-women'>
                <div className='flex-search-1'>
                    <div className='under-flex-10'>
                        <h1 className='title-flex-10'>Rechercher par sport</h1>
                    </div>
                    <div className='section-icons-12'>
                        <div className='search-back-10'>
                            <img src={Img53} alt="icon-back" className="icon-back-10"></img>
                        </div>
                        <div className='search-forward-10'>
                            <img src={Img54} alt="icon-forward" className="icon-forward-10"></img>
                        </div>
                    </div>
                </div>
                <div className='section-flex-10'>
                    {/* <div className='under-flex-20'>
                        <img src={Img55} alt='Football - Femme' className='football-women'></img>
                        <h2 className='football-title-1'>Football</h2>
                    </div>
                    <div className='under-flex-21'>
                        <img src={Img56} alt='Basketball - Femme' className='basketball-women'></img>
                        <h2 className='basketball-title-1'>Basketball</h2>
                    </div>
                    <div className='under-flex-22'>
                        <img src={Img57} alt='Tennis - Femme' className='tennis-women'></img>
                        <h2 className='tennis-title-1'>Tennis</h2> 
                        
                    </div>*/}
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='football-women' src={item.imageUrl} alt={item.nom} />
                                <Link to='' className='link-1'><h2 className='football-title-1'>{item.nom}</h2></Link>
                                {/* <p className='price-sneakers-1'>{item.prix} €</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchWomen;