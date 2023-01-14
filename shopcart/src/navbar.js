import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Nav() {
  return (
    <nav className='Shop-nav'>
      <ul>
        <li>
          <h1>Shop to React</h1>
        </li>
        <li>
          <span className='Cart-section'>
            <FontAwesomeIcon icon={faShoppingCart} className='mx-3' />
            0 items
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;