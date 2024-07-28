import { faCartPlus, faHeartCirclePlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge, Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {

  const wishlistArray = useSelector((state) => state.wishlistReducer) 
  console.log(wishlistArray); 

  const cartArray = useSelector((state)=>state.cartReducer)
console.log(cartArray);

  return (
    <>
      <Navbar expand="lg" className="bg-primary px-5 py-4 position-fixed w-100 top-0" style={{zIndex:'1'}}>
        <Container fluid>
          <Link style={{textDecoration:'none'}} to={'/'}><Navbar.Brand href="#" className='text-light fs-3'><FontAwesomeIcon icon={faCartShopping} size="lg"
            className='me-2' /> E-CART</Navbar.Brand></Link>
          <Navbar.Toggle  aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className='ms-auto me-5'>
              <Link to={'/wishlist'}>
                <Button className='btn btn-outline-light rounded mt-3'><FontAwesomeIcon icon={faHeartCirclePlus} /> Wishlist<Badge className=' ms-2 rounded'
                  bg="secondary">{wishlistArray.length}</Badge></Button>
              </Link>
              <Link to={'/cart'}>
                <Button className='btn btn-outline-light rounded ms-md-4 me-5 mt-3'><FontAwesomeIcon icon={faCartPlus} /> Cart<Badge className='ms-2 rounded'
                  bg="secondary">{cartArray.length}</Badge></Button>
              </Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header