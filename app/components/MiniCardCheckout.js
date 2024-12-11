import react from "react";

const MiniCardCheckOut = ({ src, title, price }) => {
    return (
        <>
            <div className={"flex gap-3 items-center border "}>
                <div className={"border border-[#E0E0E0] rounded-[6px] w-[80px] h-[80px] flex items-center justify-center"}>
                    <img src={src} alt="" className={"h-[60px]"} />
                </div>
                <div className={""}>
                    <div className={"text-[#505050]"}>
                        {title}
                    </div>
                    <div className={"font-semibold"}>
                        ${price}
                    </div>
                    <div className={"flex gap-2"}>
                        <div className={"border border-[#DEE2E7] w-[110px] h-[30px] flex items-center justify-center rounded-[6px]"}>
                            <button className={"text-[#0D6EFD] "}>Move to cart</button>
                        </div>
                        <div className={"border border-[#DEE2E7] w-[70px] h-[30px] flex items-center justify-center rounded-[6px]"}>
                            <button className={"text-[#FA3434]"}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MiniCardCheckOut