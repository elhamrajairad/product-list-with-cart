import Image from "next/image";
import productImg from "@/public/image-baklava-desktop.jpg"
import addToCartImg from "@/public/icon-add-to-cart.svg"

export default function SingleProduct() {
    return (
        <section className="mb-6 overflow-x-hidden">
            <section className="mb-5 xl:w-[15rem] lg:w-[12rem] relative">
                <Image src={productImg} alt="" className="rounded-2xl " />
                <section className="border border-primary absolute -bottom-5 z-30 rounded-full p-2 flex justify-around items-center  bg-white left-0 right-0 w-3/4 mx-auto">
                    <Image src={addToCartImg} alt="" />
                    <p className="font-semibold">Add to cart</p>
                </section>
            </section>
            <section>
                <small className="text-sm font-light text-secondary">Waffle</small>
                <h2 className="font-bold text-xl text-secondary my-1">Waffle with Berries</h2>
                <p className="text-danger font-bold ">$6.50</p>
            </section>
        </section>
    )
}
