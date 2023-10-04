import React from 'react';
import '../styles/background.css';
import Img3 from '../img/feet-nike.jpg';
import { Link } from 'react-router-dom';



const Background = () => {

    return (
        <div>
            {<div className="background-image">
                <img className='img-bg' src={Img3} alt="background"></img>
                <div className="section-text">
                    <p className="section-paragraph1">
                        Nike <br />
                        Zoom <br />
                        Version 1 <br />
                    </p>
                </div>
                <div className="button">
                    <Link to="/description-nike-air-zoom" className='link-1'><p className="description">Description</p></Link>
                </div>
            </div>}
        </div>
    );
};

export default Background;