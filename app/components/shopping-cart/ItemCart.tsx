"use client"
import { useDeserts } from "@/app/context/DesertsContext"
import { Deserts } from "@/app/types"
import removeDesert from "@/public/icon-remove-item.svg"
import Image from "next/image"
export default function ItemCart({ name, price, id }: Deserts) {
    const { shoppingCart, removeFromShoppingCart } = useDeserts()
    const qtyDesert = shoppingCart.filter(item => item.idProduct === id)[0].qty
    return (
        <section className="flex justify-start items-center border-b border-gray-200 p-3">
            <section>
                <h3 className="text-sm font-bold">{name}</h3>
                <section className="flex justify-start items-center gap-1">
                    <small className="text-primary text-sm font-bold">{qtyDesert} - </small>
                    <small className="text-primary text-sm font-light">${price.toFixed(2)}</small>
                </section>
            </section>
            <button className="ml-auto cursor-pointer" onClick={() => removeFromShoppingCart(id)} >
                <Image src={removeDesert} alt="" />
            </button>
        </section>
    )
}
