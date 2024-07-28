import { faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {

  const dispatch=useDispatch()

  const handlecart =(item) =>{
    dispatch(removeFromWishlist(item.id))   //to remove the item from wishlist after its added to cart
    dispatch(addToCart(item))
  }

  const wishlistArray = useSelector((state) => state.wishlistReducer)   //like prev proj counter .value kodukkkanda bcs athil objectinte value:0 il ayirinnu data
  console.log(wishlistArray);                                        //ithil array ano so no value

  return (
    <>
      <h1 className='text-center text-secondary' style={{marginTop:'120px'}}>Wish list</h1>
      {wishlistArray?.length > 0 ?
        <Row className='mt-4 p-5'>
          {wishlistArray.map((prdct)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='rounded shadow' style={{ width: '100%' }}>
              <Card.Img variant="top" src={prdct.thumbnail} />
              <Card.Body>
                <Card.Title className='text-primary'>{prdct.title.slice(0,30)}</Card.Title>
                <Card.Text>
                {prdct.description.slice(0,70)}...
                  <p className='fs-4 mt-3'><b>${prdct.price}</b></p>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={()=>dispatch(removeFromWishlist(prdct.id))} variant='outline-primary' ><FontAwesomeIcon icon={faTrash} size='xl' style={{ color: "#ff0000", }} /></Button>
                    <Button onClick={()=>handlecart(prdct)} variant='outline-primary'><FontAwesomeIcon icon={faCartPlus} size='xl' style={{ color: "#36ba1c", }} /></Button>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>))
          }
        </Row> :

        <div>
          <h2 style={{ textAlign: 'center', marginTop: '3rem', color: 'red', fontWeight: 'bolder' }}>Oops...!</h2>
          <h4 className='text-primary' style={{ textAlign: 'center' }}>Your wishlist is currently empty</h4>
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <img width={'300px'} height={'400px'} src="https://www.rentzo.co.in/assets_web/images/empty-cart.png" alt="" />
            <Link to={'/'}><Button className='btn btn-success'>Back to home</Button></Link>
          </div>
        </div>}

    </>
  )
}

export default Wishlist