"use client"
import React from 'react'
import SingleProduct from './SingleProduct'
import { useDeserts } from '@/app/context/DesertsContext'

export default function Products() {
    const { deserts, loading } = useDeserts()
    console.log(loading)
    return (
        <section className='sm:grid sm:grid-cols-2  gap-6 lg:gap-0 lg:grid-cols-3  overflow-x-hidden  justify-start'>
            {loading && <p>loading</p>}
            {deserts.map((desert) => <SingleProduct key={desert.name} {...desert} />)}
        </section>
    )
}
