import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsData } from './products';
import Nav from './navbar'

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      ProductsList: ProductsData
    }
  }

  handleAddedItem = ( product ) => {
    const counter = ++product.quantity;
    product.quantity = counter;
    this.setState( product );
  }

  handleRemovedItem = ( product ) => {
    const counter = --product.quantity;
    product.quantity = counter;
    this.setState( product );
  }

  handleCartDisplay = () => {
    const currList = this.state.ProductsList;
    const cartItems = currList.filter( ( items ) => {
      return items.quantity > 0
    } )
    return cartItems;
  }

  handleCartTotal = () => {
    const currList = this.state.ProductsList;
    const cartTotal = currList.reduce( ( previousValue, currentValue ) => {
      return previousValue + currentValue.quantity;  // <--- 3 + 5 + 4 + 11 + 7 + 22 = 52
    }, 0 )
    return cartTotal;
  }

  render() {
    return (
      <div>
        <Nav
          productItems={this.state.ProductsList}
          addItem={this.handleAddedItem}
          removeItem={this.handleRemovedItem}
          displayCartItems={this.handleCartDisplay()}
          cartTotal={this.handleCartTotal()}
        />
      </div>
    );
  }
}

export default App;