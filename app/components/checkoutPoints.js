import react from "react";

const CheckoutPoints = ({src,title,desc}) => {
    return (
        <>
            <div className={"flex gap-2"}>
                <div className={"bg-[#DEE2E7] rounded-[30px] h-[48px] w-[48px] flex items-center justify-center"}>
                    <img src={src} alt="" />
                </div>
                <div>
                    <div>
                        {title}
                    </div>
                    <div className={"text-[#A9ACB0]"}>
                        {desc}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckoutPoints