import React from 'react'
import Products from './components/cart-product/Products'

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl font-bold mb-5'>Deserts</h1>
      <Products />
    </main>
  )
}
