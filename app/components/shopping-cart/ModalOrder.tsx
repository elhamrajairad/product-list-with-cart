import Image from "next/image";
import Button from "../Button";
import confirmIcon from "@/public/icon-order-confirmed.svg"

export default function ModalOrder() {
    return (
        <section className="inset-0 fixed z-40 bg-primary/10 ">
            <section className="absolute top-1/4 bg-white w-[25rem] left-0 right-0 mx-auto p-7  rounded-2xl">
                <header>
                    <section className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Order Confirmed</h3>
                        <Image src={confirmIcon} alt="" />
                    </section>

                    <small className="opacity-30">We hope you enjoy your food!</small>
                </header>
                <section className="py-3">body</section>
                <Button>submit new order</Button>
            </section>
        </section>
    )
}
