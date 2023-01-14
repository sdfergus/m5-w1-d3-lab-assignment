import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import PRODUCTS from './products';
import Nav from './navbar'

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
        <Nav />
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

export default App;