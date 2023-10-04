// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img47 from '../img/Back.png';
import Img48 from '../img/Forward.png';
// import Img49 from '../img/iStock-France.jpg';
// import Img50 from '../img/converse-basket.jpg';
// import Img51 from '../img/athlétisme - 10.png';
import '../styles/selectionwomen.css';
import axios from 'axios';
import "../styles/baskethomme.css";
import { Link } from 'react-router-dom';

const SelectionWomen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/images')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='section-moment'>
                <div className='flex-moment-1'>
                    <div className='title-moment-1'>
                        <h1 className='under-titles-5'>En ce moment</h1>
                    </div>
                    <div className='section-icons-11'>
                        <div className='moment-back'>
                            <img src={Img47} alt="icon-back-1" className="icon-back-9"></img>
                        </div>
                        <div className='moment-forward'>
                            <img src={Img48} alt="icon-forward-1" className="icon-forward-9"></img>
                        </div>
                    </div>
                </div>
                <div className='flex-moment-2'>
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='img-moment-1' src={item.imageUrl} alt={item.nom} />
                                <Link to='' className='link-1'><h2 className='title-moment-2'>{item.nom}</h2></Link>
                                {/* <p className='price-sneakers-1'>{item.prix} €</p> */}
                            </div>
                        ))}
                    </div>
                    {/* <div className='under-moment-1'>
                        <img src={Img49} alt='france' className='img-moment-1'></img>
                        <h2 className='title-moment-2'>Collection équipes nationales</h2>
                    </div>
                    <div className='under-moment-2'>
                        <img src={Img50} alt='basket' className='img-moment-2'></img>
                        <h2 className='title-moment-3'>Collection chaussures</h2>
                    </div>
                    <div className='under-moment-3'>
                        <img src={Img51} alt='athlétisme' className='img-moment-3'></img>
                        <h2 className='title-moment-4'>Nouveauté</h2>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SelectionWomen;