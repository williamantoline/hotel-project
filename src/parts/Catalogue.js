import ProductCard from "components/Card/ProductCard";
import React from "react";

export default function Catalogue(props) {
  return (
    <div className="s-catalogue">
      <p className="c-section-text">Hotel Bintang 4 dan 5 di Medan</p>
      <div className="c-section-card">
        <div className="scrollable">
          {props.data.map((el) => {
            return <ProductCard data={el}></ProductCard>;
          })}
        </div>
      </div>
    </div>
  );
}
