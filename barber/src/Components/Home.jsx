import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import barbershops from "./reservations";
import ShopCard from "./ShopCard";
const Home = () => {
  const [search, setSearch] = useState("");
  const [filteritem, setFilteritem] = useState(barbershops);
  const handeInput = (e)=>{
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filteredItems = barbershops.filter((shop) =>
      shop.shop_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteritem(filteredItems);
  };
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search your favourite barber"
          className="search"
          onChange={handeInput}
          value={search}
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>
      <div className="shoplist">
      {filteritem.map((data, key) => {
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
