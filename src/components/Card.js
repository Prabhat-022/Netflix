import React, { useEffect, useState } from 'react';
import img from '../assets/pk.jpg';
import { fetchData } from '../api/Api';

const Card = ({ param }) => {

  return (
    <div className="cart_container">
      <div className="cart_img">
        
      </div>
      <div className="cart_img">
        <img src={img} alt='' />
      </div>
      <div className="cart_img">
        <img src={img} alt='' />
      </div>
      <div className="cart_img">
        <img src={img} alt='' />
      </div>
      <div className="cart_img">
        <img src={img} alt='' />
      </div>
      <div className="cart_img">
        <img src={img} alt='' />
      </div>
      <div className="cart_img">
        <img src={img} alt='' />
      </div>

      <div className="cart_img">
        <img src={img} alt='' />
      </div>
      <div className="cart_img">
        <img src={img} alt='' />
      </div>

    </div>

  )
}

export default Card
