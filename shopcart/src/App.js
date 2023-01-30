import './App.css';
import React, { Component } from "react";
import { ProductsData } from './products';
import Nav from './navbar'

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      selectOption: 'Normal',
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

  handleSelect = ( event ) => {

    const range = event.target.value;
    const products = this.state.ProductsList;

    switch ( range ) {
      case "Normal":
        products.sort( ( a, b ) => a.id - b.id );
        this.setState( { selectOption: range, ProductsList: products } );
        break;
      case "Lowest":
        products.sort( ( a, b ) => a.price - b.price );
        this.setState( { selectOption: range, ProductsList: products } );
        break;
      case "Highest":
        products.sort( ( a, b ) => b.price - a.price );
        this.setState( { selectOption: range, ProductsList: products } );
        break;
      default:
        console.log( "In normal state " )
    }

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
          handleSelect={this.handleSelect}
          selectOption={this.state.selectOption}
        />
      </div>
    );
  }
}

export default App;