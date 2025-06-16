"use client"
import Image from 'next/image'
import React from 'react'
import bgShoppingCart from "@/public/illustration-empty-cart.svg"
import { useDeserts } from '@/app/context/DesertsContext'
import ItemCart from './ItemCart'
import iconFreeCarbon from "@/public/icon-carbon-neutral.svg"
export default function ShoppingCart() {
    const { shoppingCart, deserts, totalPrice } = useDeserts()
    const items = deserts.filter(desert => shoppingCart.some(item => item.idProduct === desert.id))

    return (
        <section className='bg-white rounded-2xl py-5 px-6 mt-12'>
            <h2 className='text-primary text-xl font-bold'>Your cart ({shoppingCart.length})</h2>
            {shoppingCart.length == 0
                ? <section>
                    <Image src={bgShoppingCart} alt='' className='w-[10rem] mx-auto' />
                    <small className='font-light flex justify-center'>Your added items will appear here</small>
                </section>
                :
                <section>
                    {items.map((item => <ItemCart key={item.id} {...item} />))}
                    <section className='flex justify-between items-center my-5'>
                        <p className='font-semibold'>Order Total</p>
                        <p className='text-xl font-bold'>${totalPrice}</p>
                    </section>
                    <footer className='bg-primary-light px-3 py-1 flex justify-start items-center gap-2'>
                        <Image src={iconFreeCarbon} alt='' />
                        <p className='text-sm'>This is a carbon-neutral delivery</p>
                    </footer>
                </section>}
        </section>
    )
}
