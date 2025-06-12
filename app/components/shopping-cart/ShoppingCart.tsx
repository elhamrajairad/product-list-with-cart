import Image from 'next/image'
import React from 'react'
import bgShoppingCart from "@/public/illustration-empty-cart.svg"
export default function ShoppingCart() {
    return (
        <section className='bg-white rounded-2xl p-3 mt-12'>
            <section className=''>
                <h2 className='text-primary text-xl font-bold'>Your cart (0)</h2>
                <Image src={bgShoppingCart} alt='' className='w-[10rem] mx-auto' />
                <small className='font-light flex justify-center'>Your added items will appear here</small>
            </section>
        </section>
    )
}
