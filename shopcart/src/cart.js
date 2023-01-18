import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

function Cart( props ) {
  return (
    <div className="p-5 mx-5 my-2">
      <h2>Your Cart Items</h2>
      <ListGroup>
        {props.cartItems.map( ( item ) => (
          <ListGroupItem
            className='List-items'
            key={item.id}
          >
            <div className='Item-contents'>
              <span>
                <img
                  src={item.img}
                  alt={item.alt}
                  className='Item-img'
                />
                <div className='Item-name'>
                  {item.name}
                </div>
              </span>
              <span className='fw-bold'>
                Quantity: {item.quantity}
              </span>
            </div>
          </ListGroupItem>
        ) )}
      </ListGroup>
    </div>

  )
}

export default Cart;