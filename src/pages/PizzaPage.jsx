import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PizzaPage = () => {
  return (
    <div>
      <Header />
      <div className="pizza-one">
        <div className="pizza-one-left">
          <img className="pepp-pizza" src="./images/pepperoni-pizz.jpg" />
        </div>
        <div className="pizza-one-right">
          <h2>Custom Pizza</h2>
          <h3 style={{ color: '#CA0707' }}>$9.99 - $11.99</h3>
          <p>Small + $1.40; Medium + $1.70; Large + $2.00</p>
          <label>
            <input type="radio" value="small" />
            Small
          </label>
          <br />
          <label>
            <input type="radio" value="medium" />
            Medium
          </label>
          <br />
          <label>
            <input type="radio" value="large" />
            Large
          </label>
          <p>Options Total</p>
          <h3 style={{ color: '#CA0707' }}>$0.00</h3>
          <p>Final Total</p>
          <h3 style={{ color: '#CA0707' }}>$0.00</h3>
          <p>
            Each additional topping: Large + $2.00 (this should change by radio
            button)
          </p>
        </div>
      </div>
      <div className="pizza-bottom">
        <div className="toppings-left">
          <div>
            <p>Left Half - $1.00</p>
          </div>
          <div className="toppings-detail">
            <img src="./images/toppings/Anchovies.jpg" />
            <img src="./images/toppings/Bacon.jpg" />
            <img src="./images/toppings/Beef.jpg" />
            <img src="./images/toppings/Cheese.jpg" />
            <img src="./images/toppings/Garlic.jpg" />
            <img src="./images/toppings/GreenPeppers.jpg" />
            <img src="./images/toppings/Ham.jpg" />
            <img src="./images/toppings/Jalapeno.jpg" />
            <img src="./images/toppings/Meatballs.jpg" />
            <img src="./images/toppings/Mushrooms.jpg" />
            <img src="./images/toppings/Olives.jpg" />
            <img src="./images/toppings/Onion.jpg" />
            <img src="./images/toppings/Pepperoni.jpg" />
            <img src="./images/toppings/Pineapple.jpg" />
            <img src="./images/toppings/Sausage.jpg" />
            <img src="./images/toppings/Tomatoes.jpg" />
          </div>
        </div>

        <div className="toppings-whole">
          <div>
            <p>Whole Pizza - $2.00</p>
          </div>
          <div className="toppings-detail">
            <img src="./images/toppings/Anchovies.jpg" />
            <img src="./images/toppings/Bacon.jpg" />
            <img src="./images/toppings/Beef.jpg" />
            <img src="./images/toppings/Cheese.jpg" />
            <img src="./images/toppings/Garlic.jpg" />
            <img src="./images/toppings/GreenPeppers.jpg" />
            <img src="./images/toppings/Ham.jpg" />
            <img src="./images/toppings/Jalapeno.jpg" />
            <img src="./images/toppings/Meatballs.jpg" />
            <img src="./images/toppings/Mushrooms.jpg" />
            <img src="./images/toppings/Olives.jpg" />
            <img src="./images/toppings/Onion.jpg" />
            <img src="./images/toppings/Pepperoni.jpg" />
            <img src="./images/toppings/Pineapple.jpg" />
            <img src="./images/toppings/Sausage.jpg" />
            <img src="./images/toppings/Tomatoes.jpg" />
          </div>
        </div>
        <div className="toppings-right">
          <div>
            <p>Right Half - $1.00</p>
          </div>
          <div className="toppings-detail">
            <img src="./images/toppings/Anchovies.jpg" />
            <img src="./images/toppings/Bacon.jpg" />
            <img src="./images/toppings/Beef.jpg" />
            <img src="./images/toppings/Cheese.jpg" />
            <img src="./images/toppings/Garlic.jpg" />
            <img src="./images/toppings/GreenPeppers.jpg" />
            <img src="./images/toppings/Ham.jpg" />
            <img src="./images/toppings/Jalapeno.jpg" />
            <img src="./images/toppings/Meatballs.jpg" />
            <img src="./images/toppings/Mushrooms.jpg" />
            <img src="./images/toppings/Olives.jpg" />
            <img src="./images/toppings/Onion.jpg" />
            <img src="./images/toppings/Pepperoni.jpg" />
            <img src="./images/toppings/Pineapple.jpg" />
            <img src="./images/toppings/Sausage.jpg" />
            <img src="./images/toppings/Tomatoes.jpg" />
          </div>
        </div>
      </div>
      <div className="button-div">
        <button className="add-to-cart">ADD TO CART</button>
      </div>
      <Footer />
    </div>
  )
}

export default PizzaPage
