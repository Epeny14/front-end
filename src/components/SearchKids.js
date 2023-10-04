// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img74 from '../img/Back.png';
import Img75 from '../img/Forward.png';
// import Img76 from '../img/Football - enfants.png';
// import Img77 from '../img/Basketball - enfants.png';
// import Img78 from '../img/danse-canva-1.png';
import axios from 'axios';
import "../styles/baskethomme.css";
import { Link } from 'react-router-dom';
import '../styles/search-kids.css';

const SearchKids = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/children')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='search-kids-1'>
                <div className='under-search-11'>
                    <div className='title-search-11'>
                        <h1 className='under-title-search-1'>Rechercher par sport</h1>
                    </div>
                    <div className='section-search-14'>
                        <div className='search-back-14'>
                            <img src={Img74} alt="icon-back-85" className="icon-back-95"></img>
                        </div>
                        <div className='search-forward-14'>
                            <img src={Img75} alt="icon-forward-85" className="icon-forward-95"></img>
                        </div>
                    </div>
                </div>
                <div className='search-kids-2'>
                    {/* { <div className='under-search-1'>
                        <img src={Img76} alt='basket' className='img-search-10'></img>
                        <h2 className='title-search-12'>Football</h2>
                    </div>
                    <div className='under-search-2'>
                        <img src={Img77} alt='basket' className='img-search-11'></img>
                        <h2 className='title-search-13'>Basketball</h2>
                    </div>
                    <div className='under-search-3'>
                        <img src={Img78} alt='basket' className='img-search-12'></img>
                        <h2 className='title-search-14'>Danse</h2> 
                    </div> */}
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='img-search-10' src={item.imageUrl} alt={item.nom} />
                                <Link to='' className='link-1'><h2 className='title-search-12'>{item.nom}</h2></Link>
                                {/* <p className='price-tag-4'>{item.prix} €</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchKids;