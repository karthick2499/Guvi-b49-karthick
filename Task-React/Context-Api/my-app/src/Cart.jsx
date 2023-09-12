import React from 'react'
import {Common} from './Common '
import { useContext } from 'react'
import './cart.css'

function Cart() {
    const {final,cart} = useContext(Common);
    
  return (
    <div className='cart'>
        <h1 className='cart-head'>Cart</h1>
        <hr></hr>
        <div className="cart-body">
        <h6>subtotal: {final}</h6>
        <h6>Shipping: Free</h6>
        <h3 className='total'>Total: {final}</h3>
        </div>
    </div>
  )
}

export default Cart