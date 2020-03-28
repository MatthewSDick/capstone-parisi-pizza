import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PizzaPage from './pages/PizzaPage'
import CartPage from './pages/CartPage'
import CompletePage from './pages/CompletePage'
import CheckOutPage from './pages/CheckOutPage'
import OrderPage from './pages/OrderPage'

const App = () => {
  return (
    <Router>
      {/* <header>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/pizza" component={PizzaPage}></Route>
        <Route exact path="/cart" component={CartPage}></Route>
        <Route exact path="/complete" component={CompletePage}></Route>
        <Route exact path="/checkout" component={CheckOutPage}></Route>
        <Route exact path="/order" component={OrderPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
