'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFav } from '../../redux/FavSlice'

const FavPage = () => {
  const dispatch = useDispatch()
  const favItems = useSelector((state) => state.fav)

  const handleRemoveFav = (id) => {
    dispatch(removeFav(id))
  }

  return (
    <div>
      {favItems.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <h3>{item.price}</h3>
          <button className='btn' onClick={() => handleRemoveFav(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default FavPage
