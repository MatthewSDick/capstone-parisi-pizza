import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CartPage = () => {
  return (
    <div>
      <Header />
      <h1>Cart</h1>
      <div id="resp-table">
        {/* <div id="resp-table-caption">Responsive Table without Table tag</div> */}
        <div id="resp-table-header">
          <div className="table-header-cell"></div>
          <div className="table-header-cell"></div>
          <div className="table-header-cell">Product</div>
          <div className="table-header-cell">Price</div>
          <div className="table-header-cell">Quantity</div>
          <div className="table-header-cell">Total</div>
        </div>
        <div id="resp-table-body">
          <div className="resp-table-row"></div>
          <div className="table-body-cell">X</div>
          <div className="table-body-cell">Image</div>
          <div className="table-body-cell">Product</div>
          <div className="table-body-cell">$12.95</div>
          <div className="table-body-cell">1</div>
          <div className="table-body-cell">$12.95</div>
          <div className="resp-table-row"></div>
          <div className="table-body-cell">X</div>
          <div className="table-body-cell">Image</div>
          <div className="table-body-cell">Product</div>
          <div className="table-body-cell">$12.95</div>
          <div className="table-body-cell">1</div>
          <div className="table-body-cell">$12.95</div>
        </div>
        <div id="resp-table-footer">
          <div className="table-footer-cell"></div>
          <div className="table-footer-cell"></div>
          <div className="table-footer-cell"></div>
          <div className="table-footer-cell"></div>
          <div className="table-footer-cell">
            <button className="add-to-cart">UPDATE CART</button>
          </div>
          <div className="table-footer-cell">
            <button className="add-to-cart">EMPTY CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CartPage
