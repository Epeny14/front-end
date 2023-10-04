// import React from 'react';
// import Img25 from '../img/Adidas - 1.png';
// import Img26 from '../img/Nike - 1.png';
// import Img27 from '../img/Design sans titre (3).png';
// import Img28 from '../img/Design sans titre (5).png';
import React, { useEffect, useState } from 'react';
import Img23 from '../img/Back.png';
import Img24 from '../img/Forward.png';
import { Link } from 'react-router-dom';
import "../styles/baskethomme.css";
import axios from 'axios';

const BasketHomme = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/chaussures')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='sections1'>
                <div className='section-homme2'>
                    <div className='under-section-homme2'>
                        <h4 className='title-moment'>En ce moment</h4>
                    </div>
                    <div className='section-icons1'>
                        <div className='back'>
                            <img src={Img23} alt="icon-back" className="icon-back"></img>
                        </div>
                        <div className='forward'>
                            <img src={Img24} alt="icon-forward" className="icon-forward"></img>
                        </div>
                    </div>
                </div>
                <div className='section-flex'>
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='adidas-homme' src={item.url} alt={item.nom} />
                                <Link to='/description-ballon-adidas' className='link-1'><h2 className='title-adidas1'>{item.nom}</h2></Link>
                                <p className='price-tag1'>{item.prix} €</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='section-adidas-1'>
                        <img src={Img25} alt="Adidas" className="adidas-homme"></img>
                        <Link to="/description-adidas-react" className='link-1'><h3 className='title-homme1'>Baskets adidas</h3></Link>
                        <p className='price-homme1'>44,30 €</p>
                    </div>
                    <div className='section-nike-1'>
                        <img src={Img26} alt="Nike" className="nike-homme"></img>
                        <Link to="/description-nike-air-react" className='link-1'><h3 className='title-homme2'>Nike Air React</h3></Link>
                        <p className='price-homme2'>50,30 €</p>
                    </div>
                    <div className='section-adidas-2'>
                        <img src={Img27} alt="Adidas" className="adidas-homme-2"></img>
                        <Link to="/description-adidas-react" className='link-1'><h3 className='title-homme3'>Adidas React V2</h3></Link>
                        <p className='price-homme3'>40,30 €</p>
                    </div>
                    <div className='section-nike-2'>
                        <img src={Img28} alt="Nike" className="nike-homme-2"></img>
                        <Link to="/description-nike-air-max-homme" className='link-1'><h3 className='title-homme4'>Nike Air Max</h3></Link>
                        <p className='price-homme4'>35,30 €</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BasketHomme;