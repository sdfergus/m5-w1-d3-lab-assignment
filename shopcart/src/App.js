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

  render() {
    return (
      <div>
        <Nav
          productItems={this.state.ProductsList}
          addItem={this.handleAddedItem}
          removeItem={this.handleRemovedItem}
        />
      </div>
    );
  }
}

export default App;