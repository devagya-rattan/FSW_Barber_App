import React from "react";
import { FaSearch } from "react-icons/fa";
import barbershops from "./reservations";
import ShopCard from "./ShopCard";
const Home = () => {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search your favourite barber"
          className="search"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>
      <div className="shoplist">
      {barbershops.map((data, key) => {
        return (
          <ShopCard
            key={key}
            id={data.id}
            image_url={data.image_url}
            shopname={data.shop_name}
            address={data.address}
          />
        );
      })}
    </div>
    </>
  );
};

export default Home;
