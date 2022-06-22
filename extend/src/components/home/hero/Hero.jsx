import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className="middle_part">
            <div className="InvestIn">
              <h2>
                Your Best Partner On 
              </h2>
                <div className="Slidder_vertical">
                  <span className="Stocks_color">Vacation</span>
                  <span className="MutualFunds_Color">Resort</span>
                  <span className="FuturesOptions_Color">Hotel</span>
                  <span className="UsStocks_Color">Rent</span>
                  <span className="IPO_Color">Holiday</span>
                  <span className="FDs_Color">Vila</span>
                </div>
            </div>
          </div>

          <form className='flex'>
            <div className='box'>
              <span>City/street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span><label for="range-select">Choose Your Price Range : </label></span>
              <br></br>
              <div className="range-select">
              <select name ="rangess" id="range-select">
                <option value="IDR.500K">500k / Night</option>
                <option value="IDR.700K">700k / Night</option>
                <option value="IDR.800K">800k / Night</option>
                <option value="IDR.900K">900k / Night</option>
                <option value="IDR.1000K">1000k / Night</option>
                <option value="IDR.1200K">1200k / Night</option>
                <option value="IDR.1400K">1400k / Night</option>
                <option value="IDR.1600K">1600k / Night</option>
                <option value="IDR.1800K">1800k / Night</option>
                <option value="IDR.2000K">2000k / Night</option>
              </select>
              </div>
            </div>
            <button className="btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero