import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Founder' subtitle='Lets meet our founder' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>Bergabung pada {val.list}</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team