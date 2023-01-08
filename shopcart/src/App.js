import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      Catalog: [
        {
          id: 1,
          name: 'Unisex Cologne',
          img: '/products/cologne.jpg',
          alt: 'Unisex Cologne Image',
          quantity: 0
        },
        {
          id: 2,
          name: 'Apple iWatch',
          img: '/products/iwatch.jpg',
          alt: 'Apple iWatch Image',
          quantity: 0
        },
        {
          id: 3,
          name: 'Unique Mug',
          img: '/products/mug.jpg',
          alt: 'Unique Mug Image',
          quantity: 0
        },
        {
          id: 4,
          name: 'Mens Wallet',
          img: '/products/wallet.jpg',
          alt: 'Mens Wallet Image',
          quantity: 0
        },
      ]
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
          <Items catalogitems={this.state.Catalog}></Items>
        </main>
      </div>
    );
  }
}

function Items( props ) {
  return (
    <ListGroup>
      {props.catalogitems.map( ( item ) => (
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