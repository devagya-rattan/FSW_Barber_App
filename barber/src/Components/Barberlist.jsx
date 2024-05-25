import React from "react";
import barbershops from "./reservations";
import ShopCard from "./ShopCard";
const Barberlist = () => {
  return (
    <div className="shoplist">
      {barbershops.map((data, key) => {
        return (
          <ShopCard
            key={key}
            image_url={data.image_url}
            shopname={data.shop_name}
            address={data.address}
          />
        );
      })}
    </div>
  );
};

export default Barberlist;
