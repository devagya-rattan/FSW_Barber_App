import React from "react";

const ShopCard = ({ image_url, shopname, address }) => {
  return (
    <div>
      <div className="shopcard">
        <img src={image_url} alt={image_url} />
        <h1> {shopname} </h1>
        <p> {address} </p>
      </div>
    </div>
  );
};

export default ShopCard;
