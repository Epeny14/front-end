import React from 'react';
import Img40 from '../img/Skateboard.jpg';
import Img41 from '../img/Stade.png';
import "../styles/articlemen.css";

const ArticleMen = () => {
    return (
        <div>
            <div className='title-articles-14'>
                <h1 className='title-article-15'>Article de la saison</h1>
            </div>
            <div className='section-articles'>


                <div className='under-article-1'>
                    <img src={Img40} alt="skatebord" className='skatebord-article'></img>
                    <div className='under-festival-1'>
                        <h2 className='title-festival-1'>Festival dété</h2>
                        <div className='article-button-1'>
                            <p className='button-buy-1'>Acheter</p>
                        </div>
                    </div>
                </div>
                <div className='under-article-2'>
                    <img src={Img41} alt="stade" className='stade-article'></img>
                    <div className='under-festival-2'>
                        <h2 className='title-festival-2'>Festival dété</h2>
                        <div className='article-button-2'>
                            <p className='button-buy-2'>Acheter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleMen;