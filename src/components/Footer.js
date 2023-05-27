import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagramSquare, FaTiktok, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text py-2" id="basic-addon2">
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white py-2'>
                  Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+91 8264954234"
                  className='mt-3 d-block text-white'
                >+91 8264954234
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className='mt-1 d-block mb-0 text-white'
                >
                  navdeepdahiya753@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a href=''>
                    <FaFacebook className='text-white fs-4' />
                  </a>
                  <a href=''>
                    <FaInstagramSquare className='text-white fs-4' />
                  </a>
                  <a href=''>
                    <FaTiktok className='text-white fs-4' />
                  </a>
                  <a href=''>
                    <FaYoutube className='text-white fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms of Services</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container xxl'>
          <div className='row'>
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}: Powered by Digitic.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer