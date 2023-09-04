'use client'
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const item = useSelector((state) => state.cart)
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '20px',
      }}
    >
      <Link href={'/'}>Redux Nextjs Store</Link>
      <div>
        <Link className='navLink' style={{ fontWeight: 'bolder' }} href={'/'}>
          Home
        </Link>
        <Link
          className='navLink'
          style={{ fontWeight: 'bolder', marginRight: '7px' }}
          href={'/cart'}
        >
          Cart
        </Link>
        <Link
          className='navLink'
          style={{ fontWeight: 'bolder', marginRight: '7px' }}
          href={'/fav'}
        >
          Fav
        </Link>
        <span style={{ fontWeight: 'bolder' }}>items: {item.length}</span>
      </div>
    </div>
  )
}

export default Navbar
