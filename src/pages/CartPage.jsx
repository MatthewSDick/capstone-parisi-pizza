import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CartPage = () => {
  return (
    <div>
      <Header />
      <div
        className="divTable"
        style={{ borderColor: 'black', borderStyle: '1px', color: 'white' }}
      >
        <div className="divTableBody">
          <div className="divTableRowHeader">
            <div className="divTableCellDelete">
              <p style={{ color: '#CA0707' }}>.></p>
            </div>
            <div className="divTableCellPic">
              <p style={{ color: '#CA0707' }}>.></p>
            </div>
            <div className="divTableCellProduct">
              <p>Product</p>
            </div>
            <div className="divTableCellPrice">
              <p>Price</p>
            </div>
            <div className="divTableCellQuantity">
              <p>Quantity</p>
            </div>
            <div className="divTableCellTotal">
              <p>Total</p>
            </div>
          </div>
          {/* Looping items */}
          <div className="divTableRow">
            <div className="divTableCellDelete">
              <p>X</p>
            </div>
            <div className="divTableCellPic">
              <p>Pic Here</p>
            </div>
            <div className="divTableCellProduct">
              <p>Homemade Lasagna X 2</p>
            </div>
            <div className="divTableCellPrice">
              <p>$12.95</p>
            </div>
            <div className="divTableCellQuantity">
              <p>2</p>
            </div>
            <div className="divTableCellTotal">
              <p>$25.09</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellDelete">
              <p>X</p>
            </div>
            <div className="divTableCellPic">
              <p>Pic Here</p>
            </div>
            <div className="divTableCellProduct">
              <p>Homemade Lasagna X 2</p>
            </div>
            <div className="divTableCellPrice">
              <p>$12.95</p>
            </div>
            <div className="divTableCellQuantity">
              <p>2</p>
            </div>
            <div className="divTableCellTotal">
              <p>$25.09</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellDelete">
              <p>X</p>
            </div>
            <div className="divTableCellPic">
              <p>Pic Here</p>
            </div>
            <div className="divTableCellProduct">
              <p>Homemade Lasagna X 2</p>
            </div>
            <div className="divTableCellPrice">
              <p>$12.95</p>
            </div>
            <div className="divTableCellQuantity">
              <p>2</p>
            </div>
            <div className="divTableCellTotal">
              <p>$25.09</p>
            </div>
          </div>
          {/* end looping items */}
          <div className="divTableFooter">
            <div className="divTableCellDelete">
              <p></p>
            </div>
            <div className="divTableCellPic">
              <p></p>
            </div>
            <div className="divTableCellProduct">
              <p></p>
            </div>
            <div className="divTableCellPrice">
              <p></p>
            </div>
            <div className="divTableCellQuantity">
              <button className="add-to-cart">PLACE ORDER</button>
            </div>
            <div className="divTableCellTotal">
              <button className="add-to-cart">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CartPage
