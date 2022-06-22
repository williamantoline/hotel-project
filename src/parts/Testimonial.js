import TestimonialCard from "components/Card/TestimonialCard";
import React from "react";

export default function Testimonial(props) {
  return (
    <div className="s-testimonial">
      <p className="c-section-text">What they said</p>
      <div className="c-section-card">
        {props.data.map((el) => {
          return <TestimonialCard data={el}></TestimonialCard>;
        })}
      </div>
    </div>
  );
}
