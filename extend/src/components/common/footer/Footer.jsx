import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Lorem</h1>
              <p>Subtitle.</p>
            </div>
            <button className='btn5'>Contact</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='' alt='' />
              <h2>Sub title?</h2>
              <p>Subtitle</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />

              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 Nama logo Made with love in Indonesia.</span>
      </div>
    </>
  )
}

export default Footer