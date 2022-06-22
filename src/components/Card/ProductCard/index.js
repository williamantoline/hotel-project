import React from "react";

export default function ProductCard(props) {
  return (
    <a href={`hotels/${props.data._id}`}>
      <div className="c-card-product">
        <div className="card-header">
          <img src={props.data.images.headline}></img>
          <div>a</div>
        </div>
        <div className="card-body">
          <div className="card-body-name">
            <p className="card-body-name-name">{props.data.name}</p>
            <p className="card-body-name-city">
              {props.data.location.city}, {props.data.location.country}
            </p>
          </div>
          <div className="card-body-stars">*****</div>
          <div className="card-body-price">
            <p className="card-body-price-price">Rp{props.data.price}</p>
            <p>/night</p>
          </div>
        </div>
      </div>
    </a>
  );
}
