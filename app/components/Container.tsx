import { IChildrenProps } from "../types";

export default function Container({ children }: IChildrenProps) {
    return (
        <section className="container mx-auto w-[1500px] px-3 my-28">
            {children}
        </section>
    )
}
