"use client"
import Image from 'next/image'
import React from 'react'
import bgShoppingCart from "@/public/illustration-empty-cart.svg"
import { useDeserts } from '@/app/context/DesertsContext'
export default function ShoppingCart() {
    const { shoppingCart } = useDeserts()

    return (
        <section className='bg-white rounded-2xl p-3 mt-12'>
            <section className=''>
                <h2 className='text-primary text-xl font-bold'>Your cart ({shoppingCart.length})</h2>
                {shoppingCart.length == 0 ? <Image src={bgShoppingCart} alt='' className='w-[10rem] mx-auto' /> : <p>body</p>}

                <small className='font-light flex justify-center'>Your added items will appear here</small>
            </section>
        </section>
    )
}
