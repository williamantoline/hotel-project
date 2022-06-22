import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [];
  // const styles = [];
  className.push("component-button");
  className.push("btn");
  if (props.isPrimary) className.push("btn-primary");
  if (props.isSecondary) className.push("btn-secondary");
  if (props.isTertiary) className.push("btn-tertiary");
  if (props.isQuartenary) className.push("btn-quartenary");
  if (props.link) className.push("btn-link");
  // if (props.width) styles.push(`width: ${props.width}px`)

  if (props.type === "link") {
    return (
      <>
        <a href={props.link} className={className.join(" ")} id={props.id}>
          {props.value}
        </a>
      </>
    );
  }

  // if (props.icon != null) {
  //   return (
  //     <>
  //       <button className={className.join(" ")} id={props.id}>
  //         <img src={props.icon} alt={props.icon}></img>
  //         {props.value}
  //       </button>
  //     </>
  //   );
  // }
  return (
    <>
      <button className={className.join(" ")} id={props.id}>
        {props.value}
      </button>
    </>
  );
}
Button.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  type: propTypes.oneOf(["button", "link"]),
  link: propTypes.string,
  icon: propTypes.string,
  value: propTypes.string,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isTertiary: propTypes.bool,
  isQuartenary: propTypes.bool,
};
