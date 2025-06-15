import React from 'react'
import { IChildrenProps } from '../types'

export default function Button({ children }: IChildrenProps) {
    return (
        <button className='w-full rounded-full bg-primary px-3 py-1 text-white '>
            {children}
        </button>
    )
}
