import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function DisplayProducts( props ) {
  return (
    <ListGroup>
      {props.productItems.map( ( item ) => (
        <ListGroupItem
          className='List-items'
          key={item.id}
        >
          <div className='Item-name'>
            {item.name}
          </div>
          <span className='Item-contents'>
            <img src={item.img} alt="" className='Item-img' />
            <div className='Quantity-contents'>
              Quantity
              <span className='Quantity-box'>{item.quantity}</span>
            </div>
          </span>
        </ListGroupItem>
      ) )}
    </ListGroup>
  )
}

export default DisplayProducts;