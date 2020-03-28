import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CartPage = () => {
  return (
    <div>
      <Header />
      <div>
        <p></p>
        <p></p>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        {/* loop */}
        <p>
          <button>Delete</button>
        </p>
        <img src="" />

        {/* end loop */}
      </div>
      <Footer />
    </div>
  )
}

export default CartPage
