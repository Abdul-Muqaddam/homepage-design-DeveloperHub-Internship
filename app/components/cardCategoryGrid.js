import React from 'react'
import { useMediaQuery } from 'react-responsive'
function CardCategoryGrid({src,price,stprice}) {
    const is650px=useMediaQuery({minWidth:650})
    const is900px=useMediaQuery({minWidth:900})
    const is450px=useMediaQuery({minWidth:450})
    return (
        <div>
            <div className={`${is450px?"h-[48vh]":"h-[40vh]"}  border-[0.5px] flex flex-col items-center justify-evenly hover:border-none hover:scale-110 duration-300 ease-in-out  ${is900px?"w-[25vw]":"w-[30vw]"}   `}>
                <div className={" flex items-center justify-center"}>
                <img src={src} alt="" className={"h-[20vh] w-[20vw]"} />
                </div>
                <hr />
                <div className={"flex items-center w-[90%] justify-between "}>
                    <div className={` ${is650px?"flex": is450px?"":""} items-center gap-2`}>
                        <div className={"text-[18px] font-semibold"}>
                            ${price}
                        </div>
                        <del className={"text-[#8B96A5]"}>
                            {stprice}
                        </del>
                    </div>
                    <div className={"w-[40px] h-[40px] border-[0.5px] flex items-center justify-center rounded-[6px]"}>
                        <img src="/category component/love.svg" alt="" />
                    </div>

                </div>
                <div className={"flex w-[90%]"}>

                    <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                    <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                    <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                    <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                    <img src="./category component/star.svg" alt="" className={"h-[16px] w-[16px]"} />
                    <div className={"text-[#ff9017] text-[13px]"}>
                        7.5
                    </div>
                </div>

                <div className={"w-[90%]"}>
                    GoPro HERO6 4k Action Camera - Black
                </div>

            </div>
        </div>
    )
}

export default CardCategoryGrid