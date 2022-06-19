import React from "react";

export default function ProductCard() {
  return (
    <div className="c-card-product">
      <div className="card-header">
        <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
        <div>a</div>
      </div>
      <div className="card-body">
        <div className="card-body-name">
          <p className="card-body-name-name">Queen Hotel</p>
          <p className="card-body-name-city">MEDAN KOTA, MEDAN</p>
        </div>
        <div className="card-body-stars">*****</div>
        <div className="card-body-price">
          <p className="card-body-price-price">Rp140039</p>
          <p>/night</p>
        </div>
      </div>
    </div>
  );
}
