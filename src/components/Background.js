import React from 'react';
import '../styles/background.css';
import Img3 from '../img/feet-nike.jpg';
import Img4 from '../img/Nike - Canva - 1.png';
import Img5 from '../img/Nike - Canva - 2.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "../slick-carousel/slick/slick.css";
import "../slick-carousel/slick/slick-theme.css";




const Background = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>

            <Slider {...settings}>
                <div className="background-image">


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

                </div>
                <div className="background-image-1">
                    <img className='img-bg-1' src={Img4} alt="background"></img>
                    <div className="section-texts-1">
                        <p className="section-paragraph100">
                            Nike <br />
                            Zoom <br />
                            React V 50 <br />
                        </p>
                    </div>
                    <div className="button-500">
                        <Link to="/description-nike-zoom-react-v-50" className='link-100'><p className="description-12">Description</p></Link>
                    </div>
                </div>
                <div className="background-image-2">
                    <img className='img-bg-2' src={Img5} alt="background"></img>
                    <div className="section-texts-2">
                        <p className="section-paragraph200">
                            Nike <br />
                            Zoom <br />
                            React <br />
                        </p>
                    </div>
                    <div className="button-600">
                        <Link to="/description-nike-zoom-react" className='link-200'><p className="description-13">Description</p></Link>
                    </div>
                </div>

            </Slider>
            {/* <div className="background-image">
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
            </div> */}
        </div>
    );
};

export default Background;