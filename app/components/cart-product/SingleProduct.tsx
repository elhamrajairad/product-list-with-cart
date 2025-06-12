import Image from "next/image";
import productImg from "@/public/image-baklava-desktop.jpg"
import addToCartImg from "@/public/icon-add-to-cart.svg"
import { IDesertsProps } from "@/app/context/DesertsContext";
import { Deserts } from "@/app/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function SingleProduct({ category, image, name, price }: Deserts) {
    return (
        <section className="mb-6 overflow-x-hidden">
            <section className="mb-5 xl:w-[15rem] lg:w-[12rem] relative">
                <Image src={image.desktop} alt="" className="rounded-2xl " width={300} height={200} />
                <section
                    className="border cursor-pointer border-primary absolute -bottom-5 z-30 rounded-full p-2 flex justify-around items-center  bg-white left-0 right-0 w-3/5 mx-auto">
                    <Image src={addToCartImg} alt="" />
                    <p className="font-semibold">Add to cart</p>
                </section>
            </section>
            <section>
                <small className="text-sm font-light text-secondary">{category}</small>
                <h2 className="font-bold lg:text-[15px] xl:text-xl text-secondary my-1 ">{name}</h2>
                <p className="text-danger font-bold ">$ {price.toFixed(2)}</p>
            </section>
        </section>
    )
}
