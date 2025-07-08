"use client"
import React from 'react'
import { useDeserts } from '@/app/context/DesertsContext'
import increaseIcon from "@/public/icon-increment-quantity.svg"
import decrementIcon from "@/public/icon-decrement-quantity.svg"
import Image from 'next/image'

export default function IncreaseAndDecreesToShoppingCart({ id }: { id: number }) {
  const { shoppingCart, addToShoppingCart, decreesDesert } = useDeserts()
  const productQty = shoppingCart.filter(item => item.idProduct === id)[0].qty
  return (
    <section
      className="border cursor-pointer border-primary absolute -bottom-5 z-30 rounded-full p-2 flex justify-around items-center  bg-primary left-0 right-0 w-3/5 mx-auto text-sm">
      <button className='cursor-pointer text-white font-bold' onClick={() => addToShoppingCart(id)}>
        <Image src={increaseIcon} alt='' />
      </button>
      <span className='text-white font-bold'>{productQty}</span>
      <button className='cursor-pointer text-white font-bold' onClick={() => decreesDesert(id)}>
        <Image src={decrementIcon} alt='' />
      </button>
    </section>
  )
}
