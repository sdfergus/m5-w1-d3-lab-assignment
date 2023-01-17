import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsData } from './products';
import Nav from './navbar'
import DisplayProducts from './displayProducts';

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

  render() {
    return (
      <div>
        <Nav />
        <main>
          <DisplayProducts productItems={this.state.ProductsList} addItem={this.handleAddedItem} removeItem={this.handleRemovedItem}></DisplayProducts>
        </main>
      </div>
    );
  }
}

export default App;