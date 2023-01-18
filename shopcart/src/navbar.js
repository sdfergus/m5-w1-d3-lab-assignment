import "./App.css";
import { faShoppingCart, faR } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayProducts from './displayProducts';
import Cart from './cart';

function Nav( props ) {
  return (
    <Router>
      <nav className='Shop-nav'>
        <ul>
          <li>
            <Link to="/" className="Nav-links">
              <h1>Shop 2
                <FontAwesomeIcon
                  icon={faR}
                  className="fa-sm bg-white rounded-circle text-info py-2 px-3">
                </FontAwesomeIcon>
                eact
              </h1>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="Nav-links">
              <span className='Cart-section'>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className='mx-3' />
                {props.cartTotal} items
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={props.displayCartItems}
            />
          } />
        <Route
          path="/"
          element={
            <DisplayProducts
              productItems={props.productItems}
              addItem={props.addItem}
              removeItem={props.removeItem}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default Nav;