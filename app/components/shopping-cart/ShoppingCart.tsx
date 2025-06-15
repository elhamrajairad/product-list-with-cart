"use client"
import Image from 'next/image'
import React from 'react'
import bgShoppingCart from "@/public/illustration-empty-cart.svg"
import { useDeserts } from '@/app/context/DesertsContext'
import ItemCart from './ItemCart'
import Button from '../Button'
export default function ShoppingCart() {
    const { shoppingCart, deserts } = useDeserts()
    const items = deserts.filter(desert => shoppingCart.some(item => item.idProduct === desert.id))
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

    return (
        <section className='bg-white rounded-2xl p-3 mt-12'>
            <section className=''>
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
                            <p>Total Price:</p>
                            <p className='text-xl font-bold'>${totalPrice}</p>
                        </section>
                        <Button>Confirm Order</Button>
                    </section>}


            </section>
        </section>
    )
}
