import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCheckoutCart, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'




function Cart() {

  const [totalPrice,setTotalPrice]=useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //function to access the cart state
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);


  const totalcalculate=() =>{                 //function to calculate the total price in cart
    let m=(cartArray.map((itemm)=>itemm.price).reduce((p1,p2)=>p1+p2,0))   //since no initial value giving 0 as initial to reduce to avoid error
    setTotalPrice(m.toFixed(3))      //tofixed to round decimal parts 
  }

  //Fuction to checkout
  const checkout=()=>{
    alert('Your order placed successfully')
    dispatch(emptyCheckoutCart)
    navigate('/')              //to navigate to home page
  }

  useEffect(()=>{
    totalcalculate()
  },[cartArray])

console.log(totalPrice);

  return (
    <>
      <h1 className='text-center text-secondary' style={{ marginTop: '120px' }}>CART</h1>
      {cartArray.length > 0 ?
        <div className='row mt-5'>

          <div className="col-md-8 d-flex justify-content-center align-items-center" style={{ overflowX: 'auto' }}>
            <table className='table shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((item,index) =>
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td><img width={'150px'} height={'130px'} src={item.thumbnail} alt="" /></td>
                    <td>$ {item.price}</td>
                    <td><Button onClick={() => dispatch(removeFromCart(item.id))} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button></td>
                  </tr>
                )
                }
              </tbody>
            </table>
          </div>
          <div className="col-md-4 mb-4">
            <div className='shadow p-4'>
              <h3 className='text-primary mb-4'>Cart summary</h3>
              <h5>Total number of products :<span className='text-warning'> {cartArray.length}</span></h5>
              <h5 className='mt-3'>Total price :<span className='text-warning'>₹ {totalPrice}</span></h5>  
              <Button onClick={checkout} className='w-100 mt-4' variant='info'>Check Out</Button>
            </div>
          </div>
        </div> : 
        <div className='row mt-5'>
          <div className="col-md-1"></div>
          <div className="col-md-10 d-flex justify-content-center align-items-center flex-column">
            <h2 className='text-primary'>Your cart is currently empty....</h2>
            <img height={'400px'} src="https://media4.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif" alt="" />
          </div>
          <div className="col-md-1"></div>
        </div> }
    </>
  )
}

export default Cart