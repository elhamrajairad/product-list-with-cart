"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { Deserts, IChildrenProps } from "../types";

export interface IDesertsProps {
    deserts: Deserts[];
    shoppingCart: IShoppingCart[];
    totalPrice: number;
    addToShoppingCart: (id: number) => void;
    removeFromShoppingCart: (id: number) => void;
    decreesDesert: (id: number) => void;
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
    const [totalPrice, setTotalPrice] = useState<number>(0)

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
    function decreesDesert(id: number) {
        setShoppingCart((prev) => {
            return prev
                .map(item => {
                    if (item.idProduct === id) {
                        return { ...item, qty: item.qty - 1 };
                    }
                    return item;
                })
                .filter(item => item.qty > 0);
        });
    }


    function removeFromShoppingCart(id: number) {
        setShoppingCart((prev) => prev.filter(item => item.idProduct !== id))
    }
    function totalPriceHandler() {
        const sumPrices = shoppingCart.reduce((sum, cartItem) => {
            const desert = deserts.find(d => d.id === cartItem.idProduct);
            if (desert) {
                return sum + desert.price * cartItem.qty;
            }
            return sum;
        }, 0);
        setTotalPrice(sumPrices);
    }

    useEffect(() => {
        totalPriceHandler()
    }, [shoppingCart])
    useEffect(() => {
        getDeserts()
    }, [])

    return (
        <DesertsContext.Provider value={{ deserts, shoppingCart, totalPrice, addToShoppingCart, removeFromShoppingCart, decreesDesert }}>
            {children}
        </DesertsContext.Provider>
    );
}