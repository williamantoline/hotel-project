import React from "react";

export default function Gallery(props) {
  return (
    <div className="s-gallery">
      <p className="c-section-text"></p>
      <div className="left">
        <img src={props.data.images.headline}></img>
      </div>
      <div className="right">
        <div className="top">
          <img src={props.data.images.gallery[0].url}></img>
          <img src={props.data.images.gallery[1].url}></img>
        </div>
        <div className="bottom">
          <img src={props.data.images.gallery[2].url}></img>
          <img src={props.data.images.gallery[3].url}></img>
        </div>
      </div>
    </div>
  );
}
