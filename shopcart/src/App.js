import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PRODUCTS from './products';
import Nav from './navbar'
import DisplayProducts from './displayProducts';

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
          <DisplayProducts productItems={this.state.productsData}></DisplayProducts>
        </main>
      </div>
    );
  }
}

export default App;