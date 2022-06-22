import React, { Component } from "react";
import { useParams } from "react-router-dom";

import Header from "parts/Header";
import Gallery from "parts/Gallery";
import ProductDesc from "parts/ProductDesc";

import hotelsData from "json/hotels.json";

const find = (hotelsData, id) => {
  for (let i = 0; i < hotelsData.length; i++) {
    if (hotelsData[i]._id == id) {
      return hotelsData[i];
    }
  }
};

export default function Detail() {
  let { id } = useParams();

  let hotel = find(hotelsData, id);

  return (
    <>
      <Header></Header>
      <Gallery data={hotel}></Gallery>
      <ProductDesc data={hotel}></ProductDesc>
    </>
  );
}
