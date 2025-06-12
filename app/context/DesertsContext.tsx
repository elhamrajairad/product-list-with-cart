"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { Deserts, IChildrenProps } from "../types";

export interface IDesertsProps {
    deserts: Deserts[];
    getDeserts: () => void
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
    useEffect(() => {
        getDeserts()
    }, [])
    return (
        <DesertsContext.Provider value={{ deserts, getDeserts }}>
            {children}
        </DesertsContext.Provider>
    );
}