// import React from 'react';
// import Img7 from '../img/Air jordan - Nike.png';
// import Img8 from '../img/Basket-2.png';
// import Img9 from '../img/Basket-3.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';
import { Link } from 'react-router-dom';


const Baskets = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/basket')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='section-basket'>
                <div className='under-basket-1'>
                    {data.map((item) => (
                        <div key={item.id}>
                            <img className='basket-1' src={item.imageUrl} alt={item.nom} />
                            <Link to="/description-nike-air-max" className='link-1'><h3 className='title-nike1'>{item.nom}</h3></Link>
                            <p className='price2'>{item.prix} €</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Baskets;