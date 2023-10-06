import React from 'react';
import img40 from "../img/nike-femme-1.jpg";
import img41 from "../img/nike-femme-2.jpg";
import img42 from "../img/Shirt.jpg";
import img43 from "../img/iStock-shirt.jpg";
import img44 from "../img/iStock-shirt-1.jpg";
import img45 from "../img/Canva-nike-20.png";
import "../styles/women-main.css";

const WomenMain = () => {
    return (
        <div>
            <div className='section-flex-50'>
                <div className='women-flex-1'>
                    <div className='stuff-1'>
                        <img className='img-women-10' src={img40} alt="chaussures nike"></img>
                        <h1 className='name-1'>Nike Zoom V3</h1>
                        <p>50.00 €</p>
                    </div>
                    <div className='stuff-2'>
                        <img className='img-women-2' src={img41} alt="nike"></img>
                        <h1 className='name-1'>Nike Zoom V4</h1>
                        <p>20.00 €</p>
                    </div>
                    <div className='stuff-3'>
                        <img className='img-women-3' src={img42} alt="shirt"></img>
                        <h1 className='name-1'>T Shirt</h1>
                        <p>100.00 €</p>
                    </div>
                </div>
                <div className='women-flex-2'>
                    <div className='stuff-4'>
                        <img className='img-women-4' src={img43} alt="shirt"></img>
                        <h1 className='name-1'>T Shirt Spice</h1>
                        <p>40.00 €</p>
                    </div>
                    <div className='stuff-5'>
                        <img className='img-women-5' src={img44} alt="shirt"></img>
                        <h1 className='name-1'>T Shirt Istock</h1>
                        <p>60.00 €</p>
                    </div>
                    <div className='stuff-6'>
                        <img className='img-women-6' src={img45} alt="shirt"></img>
                        <h1 className='name-1'>Nike Zoom V10</h1>
                        <p>90.00 €</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenMain;