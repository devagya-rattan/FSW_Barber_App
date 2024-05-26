import React from "react";
import { useNavigate } from "react-router-dom";
const random = Math.floor(Math.random() * 10) + 1;
const ShopCard = ({ image_url, shopname, address,id}) => {
  const navigate  = useNavigate();
  const newpage = () =>{
    navigate(`barberservices/${id}`)
  }
  return (
    <div className="shopcard">
      <img src={image_url} alt={image_url} />
      <h3> {shopname} </h3>
      <p> {address} </p>
      <button onClick={newpage}  className="reserve-btn">Reserve</button>

      
      <div className="ratings">
        <p>⭐</p>
        <p>{random}</p>
      </div>
    </div>
  );
};

export default ShopCard;
