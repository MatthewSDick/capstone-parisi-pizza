import React, { useState, useEffect, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

const CheckOutPage = () => {
  return (
    <div>
      <Header />
      <div className="checkout-top">
        <div className="checkout-left">
          <h2>Billing Details</h2>
          <p>
            First Name<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Last Name<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Address<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            City<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            State<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Zip<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Phone<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Email<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            <input
              type="radio"
              name="delivery-method"
              value="pick-up"
              classNAme="delivery-method"
            />{' '}
            Pick Up
          </p>
          <p>
            <input
              type="radio"
              name="delivery-method"
              value="delivery"
              classNAme="delivery-method"
            />{' '}
            Delivery
          </p>
        </div>
        <div className="checkout-right">
          {' '}
          <h2>Additional Information</h2>
          <input
            type="text"
            className="additional-info"
            value="Notes about your order, e.g. special notes for delivery"
          ></input>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CheckOutPage
