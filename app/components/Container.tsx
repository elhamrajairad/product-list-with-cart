import { IChildrenProps } from "../types";

export default function Container({ children }: IChildrenProps) {
    return (
        <section className="container p-6 lg:p-20 mx-auto">
            {children}
        </section>
    )
}
