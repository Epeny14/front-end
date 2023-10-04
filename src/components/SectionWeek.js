// import React from 'react';
import React, { useEffect, useState } from 'react';
import Img41 from '../img/Back.png';
import Img42 from '../img/Forward.png';
// import Img43 from '../img/Basket-Femme_1.jpg';
// import Img44 from '../img/Basket-Femme_2.jpg';
// import Img45 from '../img/Basket-Femme_6.jpg';
// import Img46 from '../img/Basket-Femme_5.jpg';
import '../styles/section-week.css';
import axios from 'axios';
import "../styles/baskethomme.css";
import { Link } from 'react-router-dom';


const SectionWeek = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/femme')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='section-week'>
                <div className='under-week-1'>
                    <div className='paragraph-week'>
                        <h1 className='title-week'>Nouveautés de la semaine</h1>
                    </div>

                    <div className='section-icons-10'>
                        <div className='week-back'>
                            <img src={Img41} alt="icon-back" className="icon-back-8"></img>
                        </div>
                        <div className='week-forward'>
                            <img src={Img42} alt="icon-forward" className="icon-forward-8"></img>
                        </div>
                    </div>

                </div>
                <div className='section-img-1'>
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='img-sneakers-1' src={item.imageUrl} alt={item.nom} />
                                <Link to='' className='link-1'><h2 className='title-react-v3'>{item.nom}</h2></Link>
                                <p className='price-sneakers-1'>{item.prix} €</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='under-week-2'>
                        <img src={Img43} alt='Basket-femme-1' className='img-sneakers-1'></img>
                        <h3 className='title-react-v3'>Basket React V3</h3>
                        <p className='price-sneakers-1'>44,30 €</p>
                    </div>
                    <div className='under-week-3'>
                        <img src={Img44} alt='Basket-femme-2' className='img-sneakers-2'></img>
                        <h3 className='title-react-v4'>Basket React V4</h3>
                        <p className='price-sneakers-2'>50,30 €</p>
                    </div>
                    <div className='under-week-4'>
                        <img src={Img45} alt='Basket-femme-3' className='img-sneakers-3'></img>
                        <h3 className='title-run-v3'>Nike Run V3</h3>
                        <p className='price-sneakers-3'>50,30 €</p>
                    </div>
                    <div className='under-week-5'>
                        <img src={Img46} alt='Basket-femme-4' className='img-sneakers-4'></img>
                        <h3 className='title-air-v7'>Nike Air Max V7</h3>
                        <p className='price-sneakers-4'>35,30 €</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SectionWeek;