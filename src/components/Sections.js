// import React from 'react';
// import Img11 from '../img/Football-1.png';
// import Img12 from '../img/basketballs-215874_1280.jpg';
// import Img13 from '../img/football-19448_1920.jpg';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/produit.css';
import axios from 'axios';

const Sections = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/produit')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='section-produit1'>
                <h3 className='title10'>Les nouvelles produits</h3>
                <div className='buttons-produit1'>
                    <p className='paragraph-plus2'>Voir plus</p>
                </div>
                <div className='under-section5'>
                    <div className='under-basket-2'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='img-foot1' src={item.imageUrl} alt={item.nom} />
                                <Link to='/description-ballon-adidas' className='link-1'><h2 className='title-adidas1'>{item.nom}</h2></Link>
                                <p className='price-tag1'>{item.prix} €</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='img-produit1'>
                        <img className='img-foot1' src={Img11} alt="ballon de foot"></img>
                        <Link to='/description-ballon-adidas' className='link-1'><h2 className='title-adidas1'>Ballon Adidas</h2></Link>
                        <p className='price-tag1'>40€</p>
                    </div>
                    <div className='img-produit2'>
                        <img className='img-basket2' src={Img12} alt="ballon du basket"></img>
                        <Link to='/description-ballon-basket' className='link-1'><h2 className='title-adidas2'>Ballon de basket</h2></Link>
                        <p className='price-tag2'>70€</p>
                    </div>
                    <div className='img-produit3'>
                        <img className='img-foot3' src={Img13} alt="chaussures de foot"></img>
                        <Link to='/description-chaussures-football' className='link-1'><h2 className='title-adidas3'>Chaussures de football</h2></Link>
                        <p className='price-tag3'>70€</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Sections;