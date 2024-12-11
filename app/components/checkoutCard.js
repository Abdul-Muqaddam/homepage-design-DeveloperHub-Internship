"use client";
import react,{useState} from "react";
import MiniCard from "@/app/components/miniCard";
import { useMediaQuery } from "react-responsive";
const CheckoutCard=({src ,title, detail, price})=>{
    const is750px=useMediaQuery({minWidth:750})
    const [units, setUnits] = useState(1)
    const [calcPrice,setCalcPrice]=useState(Number(price))
    
    const addUnits = () => {
        setUnits(units + 1);
        setCalcPrice(calcPrice+Number(price))
    }
    const subtractUnits = () => {
        if(units>1){
    
            setUnits(units - 1)
            setCalcPrice(calcPrice-Number(price))
        }
    }
    return(
        <>
        <div className={`${is750px?"w-[60vw]":"w-[100vw]"}  flex flex-col items-center justify-center gap-2`}>
                <div className={"w-[90%]"}>
                    <MiniCard src={src} title={title} price={detail} />
                </div>

                <div className={"flex w-[90%] justify-between"}>
                    <div className={"flex"}>
                        <div className={"w-[40px] h-[40px] border border-[#DEE2E7] flex items-center justify-center rounded-l-[6px]"} onClick={subtractUnits}>
                            <img src="/checkout/minus.svg" alt="" />
                        </div>
                        <div className={"w-[70px] flex items-center justify-center font-medium border border-[#DEE2E7]"}>{units}</div>
                        <div className={"w-[40px] h-[40px] border border-[#DEE2E7] flex items-center justify-center rounded-r-[6px]"} onClick={addUnits}>
                            <img src="/checkout/plus.svg" alt="" />
                        </div>
                    </div>
                    <div className={"font-medium"}>
                        ${calcPrice.toFixed(2)}
                    </div>
                </div>

            </div>
        </>
    )
}
export default CheckoutCard