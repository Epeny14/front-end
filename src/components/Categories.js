import React from 'react';
import Img4 from "../img/homme-sport.jpg";
import Img5 from "../img/Femme - Sport.png";
import Img6 from "../img/Enfant-sport.jpg";
import "../styles/categorie.css";


const Categories = () => {
    return (
        <div>
            <div className='categorie'>
                <div className="under-category-1">
                    <img className="img1" src={Img4} alt="homme"></img>
                    <h3 className='title-1'>Homme</h3>
                    <div className="button-2">
                        <p className="paragraph1">Voir plus</p>
                    </div>
                </div>
                <div className="under-category-2">
                    <img className="img2" src={Img5} alt="femme"></img>
                    <h3 className="title-2">Femme</h3>
                    <div className="button-2">
                        <p className="paragraph2">Voir plus</p>
                    </div>
                </div>
                <div className="under-category-3">
                    <img className="img3" src={Img6} alt="enfant"></img>
                    <h3 className="title-3">Enfants</h3>
                    <div className="button-2">
                        <p className="paragraph3">Voir plus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;