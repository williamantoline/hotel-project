import React from "react";

import Button from "components/Button";

export default function Hero() {
  return (
    <div className="s-hero">
      <div className="left">
        <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
      </div>
      <div className="right">
        <div className="c-hero-headline">Selalu ada sesuatu dimana saja</div>
        <div className="c-hero-tagline">
          Rencanakan liburan? <br /> Cari hotelmu disini
        </div>
        <div className="c-hero-search-hotel">
          <p>Cari hotel dekat...</p>
          <div className="c-hero-search-hotel-input">
            <input placeholder="Lapangan Merdeka Medan"></input>
            <Button
              className="btn"
              id="btnSearchHotel"
              value="Cari"
              isPrimary
              btnSmall
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
