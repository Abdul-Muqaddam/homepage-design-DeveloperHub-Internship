import react,{useContext} from "react";
import { useMediaQuery } from "react-responsive";
import { toggleContext } from "../context/toggleContextProvider";

const LargeCardCheckout = ({src,price,description}) => {
    const is900px = useMediaQuery({ minWidth: 900 })
    const is500px = useMediaQuery({ minWidth: 500 })
    const {cart,setCart}=useContext(toggleContext)

    const handleCart=()=>{
        setCart([...cart, {src:"/"+src,price:price,title:""}])
    }
    return (
        <>
            <div className={`${is900px ? "w-[16.5vw]" : ""} border-[1px] border-[#DEE2E7] h-[240.98px] flex flex-col justify-evenly items-center hover:scale-110 hover:border-none transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer`}>
                <div className={` ${is900px ? "w-[12vw]" : "w-[40.93vw]"} h-[143.23px] flex items-center justify-center`}>
                    <img src={src} alt="" className={`${is500px ? "w-[35.71vw] h-[22.85vh]" : "w-[125px] h-[129px]"} `} />
                </div>
                <div className="w-[80%]">
                    <div className="text-[#1C1C1C] text-[16px] font-medium">${price}</div>
                    <div className="text-[#8B96A5] text-[13px]">{description}</div>
                </div>
                <div>
                    <button className={"flex gap-2  items-center h-[40px]"} onClick={handleCart}>
                        <img src="/checkout/cart.svg" alt="" className={"h-[18px] w-[18px]"} />
                        <div className={"text-[#0D6EFD]"}>Move to cart</div>
                    </button>
                </div>
            </div>
        </>
    )
}
export default LargeCardCheckout