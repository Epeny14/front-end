import React from 'react';
import Img7 from '../img/Air jordan - Nike.png';
import Img8 from '../img/Basket-2.png';
import Img9 from '../img/Basket-3.png';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import '../styles/styles.css';
import { Link } from 'react-router-dom';


const Baskets = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3001/basket')
    //         .then((response) => {
    //             setData(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Erreur lors de la récupération des données :', error);
    //         });
    // }, []);

    return (
        <div>
            <div className='section-basket'>
                <div className='under-basket-1'>
                    <img className='basket-1' src={Img7} alt={"nike"} />
                    <Link to="/description-nike-air-max" className='link-1'><h3 className='title-nike1'>Nike Air Max</h3></Link>
                    <p className='price2'>50 €</p>
                    {/* {data.map((item) => (
                        <div key={item.id}>
                            <img className='basket-1' src={item.imageUrl} alt={item.nom} />
                            <Link to="" className='link-1'><h3 className='title-nike1'>{item.nom}</h3></Link>
                            <p className='price2'>{item.prix} €</p>
                        </div>
                    ))} */}
                </div>
                <div className='under-baskets-2'>
                    <img className='basket-1' src={Img8} alt={"nike"} />
                    <Link to="/description-nike-air-max-270-react" className='link-1'><h3 className='title-nike2'>Nike Air Max 270 React</h3></Link>
                    <p className='price3'>60 €</p>
                </div>
                <div className='under-basket-3'>
                    <img className='basket-3' src={Img9} alt={"nike"} />
                    <Link to="/" className='link-1'><h3 className='title-nike3'>Nike Air Max 280 React</h3></Link>
                    <p className='price4'>100 €</p>
                </div>
            </div>
        </div>
    );
};

export default Baskets;