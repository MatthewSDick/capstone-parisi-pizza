import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const OrderPage = () => {
  return (
    <div>
      <Header />
      <h1>Order Page</h1>
      <div
        className="order-page"
        style={{ borderStyle: 'solid', borderColor: 'green' }}
      >
        <div
          className="order-page-left"
          style={{ borderStyle: 'solid', borderColor: 'black' }}
        >
          <h1>Left</h1>
        </div>

        <div
          className="order-page-right"
          style={{ borderStyle: 'solid', borderColor: 'red' }}
        >
          <h1>Right</h1>
          <ul className="catagory-list">
            {/* map from API */}
            <li className="order-item">
              <img className="order-image" src="./images/pepperoni-pizz.jpg" />
              <p>Item Name</p>
              <p>$ 99.99</p>
              <button className="add-to-cart">ADD TO CART</button>
            </li>
            <li className="order-item">
              <img className="order-image" src="./images/pepperoni-pizz.jpg" />
              <p>Item Name</p>
              <p>$ 99.99</p>
              <button className="add-to-cart">ADD TO CART</button>
            </li>
            <li className="order-item">
              <img className="order-image" src="./images/pepperoni-pizz.jpg" />
              <p>Item Name</p>
              <p>$ 99.99</p>
              <button className="add-to-cart">ADD TO CART</button>
            </li>
            <li className="order-item">
              <img className="order-image" src="./images/pepperoni-pizz.jpg" />
              <p>Item Name</p>
              <p>$ 99.99</p>
              <button className="add-to-cart">ADD TO CART</button>
            </li>
            <li className="order-item">
              <img className="order-image" src="./images/pepperoni-pizz.jpg" />
              <p>Item Name</p>
              <p>$ 99.99</p>
              <button className="add-to-cart">ADD TO CART</button>
            </li>
            {/* bottom of the map loop */}
          </ul>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  )
}

export default OrderPage
