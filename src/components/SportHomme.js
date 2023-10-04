// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img29 from '../img/Back.png';
import Img30 from '../img/Forward.png';
// import Img31 from '../img/Football.jpg';
// import Img32 from '../img/Basketball.jpg';
// import Img33 from '../img/Tennis.jpg';
import "../styles/sportshomme.css";
import { Link } from 'react-router-dom';
import "../styles/baskethomme.css";
import axios from 'axios';

const SportHomme = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/search')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='sections-2'>
                <div className='section-search1'>
                    <div className='title-search1'>
                        <h4 className='under-titles-10'>Rechercher par sport</h4>
                    </div>
                    <div className='section-icons2'>
                        <div className='search-back'>
                            <img src={Img29} alt="icon-back" className="icon-back2"></img>
                        </div>
                        <div className='search-forward'>
                            <img src={Img30} alt="icon-forward" className="icon-forward2"></img>
                        </div>
                    </div>
                </div>
                <div className='section-flex2'>
                    {/* <div className='image-flex1'>
                        <img src={Img31} alt='Football' className='football-men'></img>
                        <Link to="/football-homme" className='link-1'><h3 className='title-football-1'>Football</h3></Link>
                    </div>
                    <div className='image-flex2'>
                        <img src={Img32} alt='Basketball' className='basketball-men'></img>
                        <Link to="/basketball-homme" className='link-1'><h3 className='title-basketball-2'>Basketball</h3></Link>
                    </div>
                    <div className='image-flex3'>
                        <img src={Img33} alt='Tennis' className='tennis-men'></img>
                        <Link to="/tennis-homme" className='link-1'><h3 className='title-tennis-3'>Tennis</h3></Link>
                    </div> */}
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='football-men' src={item.imageUrl} alt={item.nom} />
                                <Link to='/description-ballon-adidas' className='link-1'><h2 className='title-football-1'>{item.nom}</h2></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportHomme;