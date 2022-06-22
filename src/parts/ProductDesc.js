import React from "react";

import Button from "components/Button";

function mapFacilities(facilities) {
  return facilities.facility_name;
}

export default function ProductDesc(props) {
  return (
    <div className="s-product-description">
      <div className="left">
        <div className="c-product-desc-name">
          <p className="c-product-desc-name-name">{props.data.name}</p>
          <div className="c-product-desc-name-city">
            <img src="/icons/ic_location.png"></img>
            <div>
              <p>{`${props.data.location.district}, ${props.data.location.city}`}</p>
              <p>{props.data.location.address}</p>
            </div>
          </div>
        </div>
        <div className="c-product-desc-overview">
          <p>Overview</p>
          <p>{props.data.overview}</p>
        </div>
        <div className="c-product-desc-facilities">
          <p>Facilities</p>
          <p>{props.data.facilities.map(mapFacilities).join(", ")}</p>
        </div>
      </div>
      <div className="right">
        <div className="c-product-stats">
          <div className="c-product-stats-stat">
            <p>{props.data.statistics.views}</p>
            <p>viewed</p>
          </div>
          <div className="c-product-stats-stat">
            <p>{props.data.statistics.books}</p>
            <p>booked</p>
          </div>
          <div className="c-product-stats-stat">
            <p>{props.data.statistics.stars}</p>
            <p>starred</p>
          </div>
        </div>
        <div className="c-product-stars">*****</div>
        <div className="c-product-book">
          <p className="c-product-book-title">Book Now!</p>
          <div className="row">
            <div className="input-group">
              <p>Start</p>
              <div className="input">
                <input placeholder="Pick a date..." type="date"></input>
                <Button isPrimary value="Date"></Button>
              </div>
            </div>

            <div className="separator-icon">
              <img src="/icons/ic_arrow_right.png"></img>
            </div>

            <div className="input-group">
              <p>End</p>
              <div className="input">
                <input placeholder="Pick a date..." type="date"></input>
                <Button isPrimary value="Date"></Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <p>Start</p>
              <div className="input">
                <input placeholder="Pick a date..." type="date"></input>
                <Button isPrimary value="Date"></Button>
              </div>
            </div>

            <div className="separator"></div>

            <div className="input-group">
              <p>Subtotal</p>
              <div className="price">
                <div className="price-tag">
                  <p>Rp</p>
                  <p>{props.data.price}</p>
                </div>
                <div className="info">
                  <img src="/icons/ic_info.png"></img>
                  <p>Tax and additional fees not included</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <Button isQuartenary value="Save for later"></Button>
            <Button isSecondary value="Book"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
