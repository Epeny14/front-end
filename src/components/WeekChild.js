// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img69 from '../img/Back.png';
import Img70 from '../img/Forward.png';
// import Img71 from '../img/Ballon or.png';
// import Img72 from '../img/T shirt enfant.png';
// import Img73 from '../img/Ballon - Ghana.png';
import axios from 'axios';
import "../styles/baskethomme.css";
import { Link } from 'react-router-dom';
import '../styles/week-child.css';


const WeekChild = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/stuff')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='kids-week-1'>
                <div className='under-weeks-1'>
                    <div className='title-weeks-11'>
                        <h1 className='under-title-weeks-1'>Nouveautés de la semaine</h1>
                    </div>
                    <div className='section-weeks-11'>
                        <div className='weeks-back-1'>
                            <img src={Img69} alt="icon-back-85" className="icon-back-85"></img>
                        </div>
                        <div className='weeks-forward-1'>
                            <img src={Img70} alt="icon-forward-85" className="icon-forward-85"></img>
                        </div>
                    </div>
                </div>
                <div className='weeks-shoes-1'>
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='img-weeks-1' src={item.imageUrl} alt={item.nom} />
                                <Link to='' className='link-1'><h2 className='title-weeks-12'>{item.nom}</h2></Link>
                                <p className='price-tag-4'>{item.prix} €</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='under-weeks-2'>
                        <img src={Img71} alt='basket' className='img-weeks-1'></img>
                        <h2 className='title-weeks-12'>Ballon D'or</h2>
                        <p className='price-tag-4'>55,0 €</p>
                    </div>
                    <div className='under-weeks-3'>
                        <img src={Img72} alt='basket' className='img-weeks-2'></img>
                        <h2 className='title-weeks-13'>T Shirt React V3</h2>
                        <p className='price-tag-5'>15,00 €</p>
                    </div>
                    <div className='under-weeks-4'>
                        <img src={Img73} alt='basket' className='img-weeks-3'></img>
                        <h2 className='title-weeks-14'>Ballon Ghana</h2>
                        <p className='price-tag-6'>25,99 €</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default WeekChild;