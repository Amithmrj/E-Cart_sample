import { faFacebook, faInstagram,faLinkedin,faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='row bg-primary text-light p-5'>
      <div className="col-md-5  justify-content-center align-itens-center">
        <h4 className='mb-4'><FontAwesomeIcon icon={faCartShopping} className='me-2' />E-Kart</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veritatis consectetur nobis autem cum, nostrum
           omnis blanditiis minima esse recusandae ipsa repellat! Minima quas officiis, beatae a placeat eaque voluptatibus?</p>
      </div>
      <div className="col-md-2  justify-content-center align-itens-center " >
        <h4 className='ms-3'>Links</h4>
        <ul style={{listStyle:'none'}}>
          <Link style={{textDecoration:'none'}} to={'/'}><li>Home page</li></Link>
          <Link style={{textDecoration:'none'}} to={'/wishlist'}><li>Wish list</li></Link>
          <Link style={{textDecoration:'none'}} to={'/cart'}><li>Cart</li></Link>
        </ul>
        </div>
      <div className="col-md-2  justify-content-center align-itens-center">
        <h4 className='ms-3'>Guides</h4>
        <ul style={{listStyle:'none'}}>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>BootsWatch</li>
        </ul>
        </div>
      <div className="col-md-3  justify-content-center align-itens-center">
        <h4>Contact us</h4>
        <div className='d-flex mt-3'>
          <input type="text" className='form-control' placeholder='Enter your email id'/>
          <Button className='btn bg-warning ms-2'>Subscribe</Button>
        </div>
        <div className='d-flex justify-content-evenly mt-3'>
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faXTwitter} size='2xl'/>
        <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
        <FontAwesomeIcon icon={faFacebook} size='2xl'/>
        </div>
        </div>
    </div>
  )
}

export default Footer