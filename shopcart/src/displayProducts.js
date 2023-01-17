import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts( props ) {
  const [ show, setShow ] = useState( false );  //to show modal - initial variable state is false
  const [ showData, setShowData ] = useState( {} ); //initial product showing is an empty obj

  //handle calling from event clicks
  const handleClose = () => setShow( false );  //hides modal
  const handleShow = ( product ) => {   //shows product modal
    setShow( true );
    setShowData( product );
  }

  return (
    <div>
      <ListGroup>
        {props.productItems.map( ( product ) => (
          <ListGroupItem
            className='List-items'
            key={product.id}
          >
            <div className='Item-name'>
              {product.name}
            </div>
            <span className='Item-contents'>
              <img
                src={product.img}
                alt={product.alt}
                className='Item-img'
                onClick={() => handleShow( product )} />
              <FontAwesomeIcon
                icon={faSquarePlus}
                className="fa-2x mx-3"
                onClick={() => props.addItem( product )}
              />
              <FontAwesomeIcon
                icon={faSquareMinus}
                className="fa-2x"
                onClick={() => product.quantity === 0 ? product.quantity = 0 : props.removeItem( product )}
              />
              <div className='Quantity-contents mx-4'>
                Quantity
                <span className='Quantity-box'>{product.quantity}</span>
              </div>
            </span>
          </ListGroupItem>
        ) )}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showData.img}
            width="350"
            alt={showData.alt}
            className="mx-5"
          />
          <p><span className="text-dark">Ratings: </span>{showData.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DisplayProducts;