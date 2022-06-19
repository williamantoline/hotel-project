import React from "react";

export default function TestimonialCard() {
  return (
    <div className="c-card-testimonial">
      <div className="card-header">
        <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
      </div>
      <div className="card-body">
        <div className="card-body-name">
          <p className="card-body-name-name">Daniel</p>
          <p className="card-body-name-comma">, </p>
          <p className="card-body-name-age">22</p>
        </div>
        <div className="card-body-job">
          <p>KARYAWAN SWASTA</p>
        </div>
        <div className="card-body-stars">*****</div>
        <div className="card-body-comment">
          <p>
            "Hotelhotel adalah platform booking hotel terbaik sepanjang masa"
          </p>
        </div>
      </div>
    </div>
  );
}
