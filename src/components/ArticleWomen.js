import React from 'react';
import Img58 from '../img/fitness-canva-1.png';
import Img59 from '../img/Foot-femme.png';
import '../styles/article-women.css';

const ArticleWomen = () => {
    return (
        <div>
            <div className='section-article-30'>
                <div className='title-article-30'>
                    <h1 className='title-section-30'>Article de la saison</h1>
                </div>
                <div className='section-flex-30'>
                    <div className='section-fitness-30'>
                        <img src={Img58} alt="fitness" className='img-fitness-30'></img>
                        <h2 className='title-festival-30'>Festival d'été</h2>
                        <div className='article-button-30'>
                            <p className='paragraph-button-30'>Acheter</p>
                        </div>
                    </div>
                    <div className='section-football-30'>
                        <img src={Img59} alt="football" className='img-football-30'></img>
                        <h2 className='title-football-30'>Tenues de foot</h2>
                        <div className='article-button-31'>
                            <p className='paragraph-button-31'>Acheter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleWomen;