import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'



function Home() {

  const dispatch=useDispatch()

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  return (
    <Row className='p-5' style={{marginTop:'100px'}}>
      { data?.length>0?
      data?.map(prodct=>
      <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='rounded shadow' style={{ width:'100%', }}>
          <Card.Img variant="top" height={'250px'} src={prodct.thumbnail} />
          <Card.Body>
            <Card.Title className='text-primary'><b>{prodct.title.slice(0,20)}</b></Card.Title>
            <Card.Text>
              {prodct.description.slice(0,60)}...
              <p className='fs-4 mt-3'><b>${prodct.price}</b></p>
              <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(addToWishlist(prodct))} variant='outline-primary' ><FontAwesomeIcon icon={faHeart} size='xl' style={{ color: "#ff0000", }} /></Button>
                <Button onClick={()=>dispatch(addToCart(prodct))} variant='outline-primary'><FontAwesomeIcon icon={faCartPlus} size='xl' style={{ color: "#36ba1c", }} /></Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>):<p className='mt-5 text-secondary fs-3'>Page loading, please wait</p>}


    </Row>
  )
}

export default Home