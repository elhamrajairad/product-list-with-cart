import React from 'react'
import { IChildrenProps } from '../types'
import Container from './Container'
import ShoppingCart from './shopoing-cart/ShoppingCart'

export default function MainLayout({ children }: IChildrenProps) {
    return (
        <section>
            <Container>
                <section className='lg:grid lg:grid-cols-4'>
                    <section className='col-span-3 '>{children}</section>
                    <aside className='col-span-1'>
                        <ShoppingCart />
                    </aside>
                </section>
            </Container>
        </section>
    )
}
