"use client";

import CardRecommended from "@/app/components/cardRecommended";
import CheckoutCard from "@/app/components/checkoutCard";
import CheckoutPoints from "@/app/components/checkoutPoints";
import LargeCardCheckout from "@/app/components/largeCardCheckout";
import MiniCard from "@/app/components/miniCard";
import MiniCardCheckOut from "@/app/components/MiniCardCheckout";
import { toggleContext } from "@/app/context/toggleContextProvider";
import { useRouter } from "next/navigation";
import react, { useState,useContext } from "react";
import { useMediaQuery } from "react-responsive";




const Checkout = () => {

    const is800px = useMediaQuery({ minWidth: 800 })
    const is550px = useMediaQuery({ minWidth: 550 })
    const is750px = useMediaQuery({ minWidth: 750 })
    const {cart}=useContext(toggleContext)

    const [shippingPrice,setShippingPrice]=useState(10.00)
    const [TAX,setTAX]=useState(7.00)


    const router=useRouter()
    const handleBackPage=()=>{
        router.push("/category")
    }

    const [savedItems, setSaveditems] = useState([
        {
            src: "/3rd section/headset.svg",
            title: "HeadPhone for gamming",
            price: "73",
        },
        {
            src: "/3rd section/camera.svg",
            title: "Camera for gamming",
            price: "85",
        },
        {
            src: "/3rd section/laptop.svg",
            title: "Laptop for gamming",
            price: "300",
        },
        {
            src: "/3rd section/cloth.svg",
            title: "Coat for gamming",
            price: "10",
        },
        {
            src: "/3rd section/headphone.svg",
            title: "Camera for gamming",
            price: "55",
        }

    ])


    const [checkoutPoints, setCheckoutPoints] = useState([
        {
            src: "/checkout/lock.svg",
            title: "Secure payment",
            desc: "Have you ever finally just"

        },
        {
            src: "/checkout/chat.svg",
            title: "Customer support",
            desc: "Have you ever finally just"
        },
        {
            src: "/checkout/shipping.svg",
            title: "Free delivery",
            desc: "Have you ever finally just"
        }
    ])

    const [checkOutItems, setCheckoutItems] = useState([
        {
            src: "/7th section/coat.svg",
            title: "T-Shirts with multiple colors of men",
            detail: "Size:medium,Color:blue,Seller:Artel Market",
            price: "78.99"
        },
        {
            src: "/7th section/coat.svg",
            title: "T-Shirts with multiple colors of men",
            detail: "Size:medium,Color:blue,Seller:Artel Market",
            price: "78.99"
        },
        {
            src: "/7th section/coat.svg",
            title: "T-Shirts with multiple colors of men",
            detail: "Size:medium,Color:blue,Seller:Artel Market",
            price: "78.99"
        }
    ])
    return (
        <>
            <div className={"flex flex-col gap-3 ]"}>
                <div className={`${is750px?"flex items-start justify-evenly":""}`}>
                    <div>

                    {
                        cart.map((item, index) => (
                            <div className={"flex flex-col gap-4 mt-4"}>
                                <CheckoutCard key={index} src={(item.src).slice(1)} title={item.title} detail={item.detail} price={item.price} />
                                <hr />
                            </div>
                        ))
                    }
                    <button className={"bg-[#0d78FF] ml-10 my-3 flex items-center justify-evenly h-[40px] w-[140px] rounded-[6px]"} onClick={handleBackPage}>
                        <img src="/checkout/backarrow.svg" alt="" />
                        <div className={"text-white"}>
                            Back to shop
                        </div>
                    </button>
                    </div>

                    <div className={`${is750px ? "w-[30vw] mt-6" : "w-[100vw]"}  flex items-center justify-center`}>

                        <div className={"w-[90vw] flex flex-col gap-5"}>

                            <div className={"flex flex-col gap-3 "}>
                                <div className="flex justify-between">
                                    <div className={"text-[#8B96A5]"}>Items</div>
                                    <div>{cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2)}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className={"text-[#8B96A5]"}>Shipping: </div>
                                    <div>${shippingPrice}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className={"text-[#8B96A5]"}>Tax:</div>
                                    <div>${TAX}</div>
                                </div>
                                <div className="flex justify-between font-semibold text-[18px]">
                                    <div >Total:</div>
                                    <div>{(cart.reduce((total, item) => total + Number(item.price), 0) + TAX + shippingPrice).toFixed(2)}</div>
                                </div>
                                <button className={"bg-[#00B517] text-[white] rounded-[6px] h-[40px] font-medium"}>Checkout &#40; {cart.length}  &#41;</button>
                                <div className={"flex justify-evenly"}>
                                    <img src="/checkout/american Express.svg" alt=""  />
                                    <img src="/checkout/master.svg" alt="" />
                                    <img src="/checkout/paypal.svg" alt="" />
                                    <img src="/checkout/visa.svg" alt="" />
                                    <img src="/checkout/applePay.svg" alt="" />
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className={"w-[100vw] flex items-center justify-center"}>


                    <div className={`${is800px ? "" : "hidden"} w-[90vw] flex justify-between`}>
                        {
                            checkoutPoints.map((item, index) => (
                                <CheckoutPoints key={index} src={item.src} title={item.title} desc={item.desc} />
                            ))
                        }


                    </div>
                    <hr />
                </div>
                <div className={"w-[100vw] flex items-center justify-center "}>
                    <div className={"flex flex-col gap-3 w-[90vw]"}>

                        <div className="text-[18px] font-semibold ">
                            Saved for later
                        </div>


                        {is550px ?

                            <div className={"flex overflow-auto min-w-[100vw] gap-3 scroll-ba"}>
                                {savedItems.map((item, index) => (
                                    <>
                                        <LargeCardCheckout key={index} src={item.src} price={item.price} description={item.title} />

                                    </>


                                ))}
                                {/* <CardRecommended src={"/7th section/shirt.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                                    <CardRecommended src={"/7th section/jacket.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                                    <CardRecommended src={"/7th section/pants.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                                    <CardRecommended src={"/7th section/pants.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} /> */}
                            </div>
                            : savedItems.map((item, index) => (

                                <MiniCardCheckOut key={index} src={item.src} title={item.title} price={item.price} />
                            ))}


                    </div>
                </div>

            </div>
        </>
    )
}
export default Checkout