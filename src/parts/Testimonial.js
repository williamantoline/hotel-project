import TestimonialCard from "components/Card/TestimonialCard";
import React from "react";

export default function Testimonial(props) {
  return (
    <div className="s-testimonial">
      <p className="c-section-text">What they said</p>
      <div className="c-section-card">
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
      </div>
    </div>
  );
}
