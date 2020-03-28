# Parisi

Pizza shop that includes italian dinner items.
I know this is a big web site but at a minimum I would like to have the following functionality...

Functionality:
Allow people to order online.
Add and delete items from cart.
Finalize order and pay

Colors
RED - CA0707
GREEN - 548C1D
YELLOW - FAC123
GRAY - D9D9D9
WHITE - FFFFFF

Database
Catagory
-- *Id
-- Name
-- Link to Item
Customer Table
-- *Id  
-- Name
-- Addres
-- City
-- State
-- Zip
-- Phone
-- Email
Items Table
-- *Id
-- Name
-- Description
-- Price
-- Image Path
Orders
-- *Id
-- Items
-- Order Time
-- Completed
-- Out For Delivery

Old Cart

      <div className="cart-page">
        <div className="cart-table">
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
              <div className="table-body-cell">
                {' '}
                <input
                  className="item-quantity"
                  type="text"
                  id="item_name"
                  name="item_name"
                  value="12"
                ></input>
              </div>
              <div className="table-body-cell">$12.95</div>
              <div className="resp-table-row"></div>
              <div className="table-body-cell">X</div>
              <div className="table-body-cell">Image</div>
              <div className="table-body-cell">Product</div>
              <div className="table-body-cell">$12.95</div>
              <div className="table-body-cell">
                <input
                  className="item-quantity"
                  type="text"
                  id="item_name"
                  name="item_name"
                  value="12"
                ></input>
              </div>
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
        </div>
        <div>
          <h2>Cart Totals</h2>
        </div>
        <div className="cart-totals">
          <div id="resp-table">
            <div id="resp-table-body"></div>
            <div className="resp-table-row"></div>
            <div className="table-body-cell">Sub Total:</div>
            <div className="table-body-cell">$ 15.00</div>
            <div className="resp-table-row"></div>
            <div className="table-body-cell">Tax:</div>
            <div className="table-body-cell">$ 1.50</div>
            <div className="resp-table-row"></div>
            <div className="table-body-cell">Total:</div>
            <div className="table-body-cell">$ 16.50</div>
          </div>
          <div id="resp-table-footer">
            <div className="table-footer-cell">
              <button className="add-to-cart">EMPTY CART</button>
            </div>
            <div className="table-footer-cell">
              <button className="add-to-cart">EMPTY CART</button>
            </div>
          </div>
        </div>
      </div>
