// import React from 'react';
// import Img60 from '../img/Bébé.jpg';
// import Img61 from '../img/Enfants-1.jpg';
// import Img62 from '../img/Adolescent.jpg';
import React, { useEffect, useState } from 'react';
import '../styles/article-child.css';
import axios from 'axios';
import "../styles/baskethomme.css";
import { Link } from 'react-router-dom';

const ArticleChildren = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/kids')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className='article-child'>
                <div className='title-kids'>
                    <h1 className='title-child-2'>Les articles pour toutes les tailles</h1>
                </div>

                <div className='flex-child-1'>
                    <div className='section-flex-1'>
                        {data.map((item) => (
                            <div key={item.id}>
                                <img className='img-child-2' src={item.imageUrl} alt={item.nom} />
                                <Link to='' className='link-1'><h2 className='title-baby'>{item.nom}</h2></Link>
                                {/* <p className='title-age-1'>(0 - 4 ans)</p> */}
                                <div className='button-children-2'>
                                    <p className='under-button-25'>Voir plus</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className='under-child-1'>
                        <img src={Img60} alt='bébé' className='img-child-2'></img>
                        <h1 className='title-baby'>Bébé et tout petit</h1>
                        <p className='title-age-1'>(0 - 4 ans)</p>
                        <div className='button-children-2'>
                            <p className='under-button-25'>Voir plus</p>
                        </div>
                    </div>
                    <div className='under-child-2'>
                        <img src={Img61} alt='enfant' className='img-child-3'></img>
                        <h1 className='title-child-90'>Enfant</h1>
                        <p className='title-age-2'>(4 - 7 ans)</p>
                        <div className='button-children-3'>
                            <p className='under-button-26'>Voir plus</p>
                        </div>
                    </div>
                    <div className='under-child-3'>
                        <img src={Img62} alt='enfant' className='img-child-4'></img>
                        <h1 className='title-teenager-1'>Ado</h1>
                        <p className='title-age-3'>(10 - 15 ans)</p>
                        <div className='button-children-4'>
                            <p className='under-button-27'>Voir plus</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ArticleChildren;