import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function DisplayProducts( props ) {

  const [ show, setShow ] = useState( false );  //to show modal
  const [ showImg, setShowImg ] = useState( {} );

  //handle calling from event clicks
  const handleClose = () => setShow( false );
  const handleShow = ( product ) => {
    setShow( true );
    setShowImg( product );
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
                alt=""
                className='Item-img'
                onClick={() => handleShow( product )} />
              <div className='Quantity-contents'>
                Quantity
                <span className='Quantity-box'>{product.quantity}</span>
              </div>
            </span>
          </ListGroupItem>
        ) )}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImg.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImg.img}
            width="350"
            alt={showImg.alt}
            className="mx-5"
          />
          <p><span className="text-dark">Ratings: </span>{showImg.ratings}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DisplayProducts;