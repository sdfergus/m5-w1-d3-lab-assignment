import './App.css';
import React, { Component } from "react";
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
    const cartTotal = currList.reduce( ( prevVal, currVal ) => {
      return prevVal + currVal.quantity;
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