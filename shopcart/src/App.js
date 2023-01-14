import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
import PRODUCTS from './products';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      productsData: PRODUCTS
    }
  }

  render() {
    return (
      <div>
        <header className='Shop-header'>
          <h1>Shop to React</h1>
          <span className='Cart-section'>
            <FontAwesomeIcon icon={faShoppingCart} className='mx-3' />
            0 items
          </span>
        </header>
        <main>
          <Items productItems={this.state.productsData}></Items>
        </main>
      </div>
    );
  }
}

function Items( props ) {
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
            <span className='Quantity-box'>{item.quantity}</span> quantity

          </span>
        </ListGroupItem>
      ) )}
    </ListGroup>
  )
}

export default App;