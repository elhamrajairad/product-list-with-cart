"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { Deserts, IChildrenProps } from "../types";

export interface IDesertsProps {
    deserts: Deserts[];
    shoppingCart: IShoppingCart[]
    addToShoppingCart: (id: number) => void
}
export interface IShoppingCart {
    idProduct: number;
    qty: number
}
const DesertsContext = createContext<undefined | IDesertsProps>(undefined);

export function useDeserts() {
    const context = useContext(DesertsContext);
    if (!context) {
        throw new Error("useDeserts must be used within a ProviderContextDeserts");
    }
    return context;
}

export function ProviderContextDeserts({ children }: IChildrenProps) {
    const [deserts, setDeserts] = useState<Deserts[]>([]);
    const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>([])

    async function getDeserts() {
        try {
            const res = await fetch("/api/deserts");
            if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
            const data = (await res.json()) as Deserts[];
            setDeserts(data);
        } catch (err) {
            console.error("Error fetching deserts:", err);
        }
    }
    function addToShoppingCart(id: number) {
        setShoppingCart(prev => {
            const existDesert = prev.find(item => item.idProduct === id)

            if (existDesert) {
                return prev.map(item => {
                    return item.idProduct === id
                        ?
                        { ...item, qty: item.qty + 1 }
                        : item
                })
            } else {
                return [...prev, { idProduct: id, qty: 1 }]
            }
        })
    }

    useEffect(() => {
        getDeserts()
    }, [])

    return (
        <DesertsContext.Provider value={{ deserts, shoppingCart, addToShoppingCart }}>
            {children}
        </DesertsContext.Provider>
    );
}