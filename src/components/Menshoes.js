// import React from 'react';
// import Img34 from '../img/Zoom React V3.jpg';
// import Img35 from '../img/Puma.jpg';
// import Img36 from '../img/Reebok.jpg';
// import Img37 from '../img/Nike V2.png';
import React, { useEffect, useState } from 'react';
import Img38 from '../img/Back.png';
import Img39 from '../img/Forward.png';
import '../styles/menshoes.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/baskethomme.css";

const Menshoes = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/shoes')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='section-shoes'>
                <div className='under-shoes-1'>
                    <div className='paragraph-shoes'>
                        <h4 className='title-shoes'>Les chaussures</h4>
                    </div>
                    <div className='section-icons-3'>
                        <div className='shoes-back'>
                            <img src={Img38} alt="icon-back" className="icon-back3"></img>
                        </div>
                        <div className='shoes-forward'>
                            <img src={Img39} alt="icon-forward" className="icon-forward3"></img>
                        </div>
                    </div>
                </div>
                <div className='flex-shoes'>
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='shoes-1' src={item.imageUrl} alt={item.nom} />
                                <Link to='/description-ballon-adidas' className='link-1'><h2 className='title-football-1'>{item.nom}</h2></Link>
                                <p className='paragraph-shoes-1'>{item.prix} €</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='under-flex-shoes-1'>
                        <img src={Img34} alt="Zoom React V3" className='shoes-1'></img>
                        <Link to="/description-zoom-react-v3" className='link-1'><h2 className='title-react-1'>Zoom React V3</h2></Link>
                        <p className='paragraph-shoes-1'>35,00 €</p>
                    </div>
                    <div className='under-flex-shoes-2'>
                        <img src={Img35} alt="Puma" className='shoes-2'></img>
                        <Link to="/description-zoom-react-v4" className='link-1'><h2 className='title-react-2'>Zoom React V3</h2></Link>
                        <p className='paragraph-shoes-2'>50,00 €</p>
                    </div>
                    <div className='under-flex-shoes-3'>
                        <img src={Img36} alt="Puma" className='shoes-3'></img>
                        <Link to="/description-reebok-shaq-fu" className='link-1'><h2 className='title-react-3'>Rebook Shaq Fu</h2></Link>
                        <p className='paragraph-shoes-3'>70,00 €</p>
                    </div>
                    <div className='under-flex-shoes-4'>
                        <img src={Img37} alt="Nike" className='shoes-4'></img>
                        <Link to="/description-nike-react-v3" className='link-1'><h2 className='title-react-4'>Nike React V3</h2></Link>
                        <p className='paragraph-shoes-4'>45,00 €</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Menshoes;