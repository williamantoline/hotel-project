import React from "react";

import Button from "components/Button";
import Logo from "components/Logo";

export default function Header(props) {
  return (
    <header className="component-header">
      <div className="left">
        <Logo />
      </div>
      <div className="right">
        <Button
          type="link"
          link="/about-us"
          className="btn"
          value="About Us"
          isTransparent
        ></Button>
        <Button
          type="link"
          link="/testimonial"
          className="btn"
          value="Testimonial"
          isTransparent
        ></Button>
        <Button className="btn" value="Book A Hotel" isPrimary></Button>
      </div>
    </header>
  );
}
