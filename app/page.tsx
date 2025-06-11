import React from 'react'
import SingleProduct from './components/cart-product/SingleProduct'
import Products from './components/cart-product/Products'

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-semibold mb-5'>Deserts</h1>
      <Products />
    </main>
  )
}
