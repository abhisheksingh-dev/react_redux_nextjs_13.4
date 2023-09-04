'use client'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/CartSlice'
import { addFav } from '../redux/FavSlice'

const HomePage = () => {
  const [products, setproducts] = useState([])
  const dispatch = useDispatch()

  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setproducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  const handleFav = (product) => {
    dispatch(addFav(product))
  }

  return (
    <div className='productsWrapper'>
      {products.map((product) => (
        <div key={product.id} className='card'>
          <img src={product.image} alt='img' />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button
            className='btn'
            onClick={() => handleFav(product)}
            style={{ marginRight: '5px', background: 'red' }}
          >
            Add To Fav
          </button>
          <button className='btn' onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default HomePage
