import React from 'react'
import SingleProduct from './SingleProduct'

export default function Products() {
    return (
        <section className='sm:grid sm:grid-cols-2 md:gap-6 lg:gap-0 lg:grid-cols-3  overflow-x-hidden  justify-start'>
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
        </section>
    )
}
