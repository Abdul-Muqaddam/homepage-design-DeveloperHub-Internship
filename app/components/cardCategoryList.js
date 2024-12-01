import React from 'react'

function CardCategoryList({ src, title, price, orders }) {
    return (
        <div className={"flex w-[100vw] items-center justify-center "}>
            <div className={"flex w-[90vw] border-[0.5px] h-[114px] items-center justify-center"}>
                <img src={src} alt="" className={"h-[84px] w-[90px]"} />
                <div>
                    <div className={"text-[#505050]"}>{title}</div>
                    <div className={"font-semibold"}>${price}</div>
                    <div className={"flex gap-1"}>
                        <div className={"flex"}>

                            <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                            <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                            <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                            <img src="./category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
                            <img src="./category component/star.svg" alt="" className={"h-[16px] w-[16px]"} />
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <div className={"text-[#ff9017] text-[13px]"}>
                                7.5
                            </div>
                            <img src="./category component/Dot.svg" alt="" className={"h-[6px] w-[6px]"} />
                            <div className="text-[#8B96A5] text-[13px]">{orders}</div>
                        </div>
                    </div>
                    <div className={"text-[#00b517] text-[13px]"}>Free Shipping</div>
                </div>
            </div>
        </div>
    )
}

export default CardCategoryList