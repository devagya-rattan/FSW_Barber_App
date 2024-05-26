import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import barbershops from "./reservations";
import { IoMdClose } from "react-icons/io";
const Barberservices = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState([]);
  // console.log(id);
  const handleClick = (event, key) => {
    setValue(barbershops[key].services)
    console.log(value)
    setToggle(true);
    console.log(event.target);
    // console.log(value);
    console.log("key index: ", key);
    // barbershops[key].services.map((data, value) => {
    //  setValue(data)
    // });
  };
  const closeToggle = () => {
    if (toggle === true) {
      setToggle(false);
    }
  };

  return (
    <>
      <div className={toggle ? "hamburger-slide-active" : "hamburger-slide"}>
        <div className="hamburger-contents">
          <div className="menuheading">
            <h1>Reserve your spot </h1>
            <h1>
              <IoMdClose onClick={closeToggle} />
            </h1>
          </div>
          <div className="menus">
            <div className="login">
              {value.map((data,index)=>{
                <li className="res-list"  key={index}> {data} </li>
              })}
            </div>
            <div className="reservations">
              <h4>Your reservations</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="titleimages">
        <img
          src="https://platform.minervabeauty.com/media/amasty/blog/wooden-barber-shop-interior.png"
          alt="https://hiddencityphila.org/wp-content/uploads/2016/12/Barbershop4_.jpg"
        />
      </div>
      <div className="services-list">
        {barbershops.map((data, key) => {
          return (
            <div key={key} className="list">
              <p>
                {" "}
                {data.services.map((info, index) => {
                  return <div key={index}>{info}</div>;
                })}{" "}
              </p>
              <p> {data.price} </p>
              <button
                onClick={(event) => handleClick(event, key)}
                className="reservation-btn"
              >
                Reserve
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Barberservices;
