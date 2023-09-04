'use client'
import React from 'react'
import { remove } from '../../redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const handleRemove = (item) => {
    dispatch(remove(item.id))
  }

  return (
    <div>
      <h3>Cart page</h3>
      <div className='cartWrapper'>
        {cartItems.map((item) => (
          <div className='cartCard'>
            <img src={item.image} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className='btn' onClick={() => handleRemove(item)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartPage
