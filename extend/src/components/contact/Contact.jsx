import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
        <div className="hero_btn d_flex">
        <div className="col_1">
          <h4>Find us here</h4>
          <br></br>
          <div className="button">
            <button className="btn_shadow">
              <i className="fab fa-facebook"></i>
            </button>
            <button className="btn_shadow">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="btn_shadow">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
        </div>
      </div>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>

      
    </>
  )
}

export default Contact