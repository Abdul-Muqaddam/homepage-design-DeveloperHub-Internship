import react from "react";
const MiniCard=({src,title,price})=>{
    return(
        <>
                    <div className={"flex gap-3 items-center"}>
                        <div className={"border border-[#E0E0E0] rounded-[6px] w-[200px] h-[80px] flex items-center justify-center"}>
                            <img src={src} alt="" className={"h-[60px] "} />
                        </div>
                        <div className={"w-[50vw]"}>
                            <div>
                                {title}
                            </div>
                            <div className={"text-[#8B96A5] "}>
                                {price}
                            </div>
                        </div>
                    </div>
        </>
    )
}
export default MiniCard