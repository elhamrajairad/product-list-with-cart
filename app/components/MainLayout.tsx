import React from 'react'
import { IChildrenProps } from '../types'
import Container from './Container'

export default function MainLayout({ children }: IChildrenProps) {
    return (
        <section>
            <Container>
                <section className='lg:grid lg:grid-cols-4'>
                    <section className='col-span-3 '>{children}</section>
                    <aside className='col-span-1'>aside</aside>
                </section>
            </Container>
        </section>
    )
}
