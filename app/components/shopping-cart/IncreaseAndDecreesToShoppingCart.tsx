"use client"
import { useDeserts } from '@/app/context/DesertsContext'
import React from 'react'

export default function IncreaseAndDecreesToShoppingCart({ id }: { id: number }) {
  const { shoppingCart, addToShoppingCart } = useDeserts()
  const productQty = shoppingCart.filter(item => item.idProduct === id)[0].qty
  console.log(productQty)
  return (
    <section
      className="border cursor-pointer border-primary absolute -bottom-5 z-30 rounded-full p-2 flex justify-around items-center  bg-primary left-0 right-0 w-3/5 mx-auto">
      <button className='cursor-pointer text-white font-bold' onClick={() => addToShoppingCart(id)}>+</button>
      <span className='text-white font-bold'>{productQty}</span>
      <button className='cursor-pointer text-white font-bold' onClick={() => console.log("-")}>-</button>
    </section>
  )
}
