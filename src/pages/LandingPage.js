import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Testimonial from "parts/Testimonial";
import Catalogue from "parts/Catalogue";

import hotels from "json/hotels.json";
import testimonials from "json/testimonials.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header></Header>
        <Hero></Hero>
        <Catalogue data={hotels}></Catalogue>
        <Testimonial data={testimonials}></Testimonial>
      </>
    );
  }
}
