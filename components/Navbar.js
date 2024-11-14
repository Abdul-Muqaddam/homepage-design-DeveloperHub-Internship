import React from "react";
const Navbar = () => {
    return (
        <>
            <div className="w-[100vw] h-[56px] flex justify-center items-center">
                <div className="w-[90vw] flex items-center justify-between">
                    <div className="flex items-center justify-between w-[150px]">
                        <div className="h-[24px] w-[24px] flex items-center justify-center">
                            <img src="/navbar component pictures/hamburger.svg" alt="" />
                        </div>
                        <div className="flex items-center justify-between w-[108px]">
                            <div className="bg-[#0D6EFD] h-[31.44px] w-[29.59px] rounded-[2px] flex items-center justify-center shadow-shopping-bag">
                                <img src="/navbar component pictures/shoping bag.svg" alt="" />
                            </div>
                            <div className="text-[#8CB7F5] font-bold text-[1.6rem]">Brand</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-[65px]">
                        <div className="h-[24px] w-[24px]">
                        <img src="/navbar component pictures/shopping cart.svg" alt="" />
                        </div>
                        <div className="h-[18px] w-[24px]">
                        <img src="/navbar component pictures/profile.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100vw] h-[40px] flex items-center justify-center">
            <div className=" w-[90vw]  relative">
                <input type="text" placeholder="Search" className="border-[1px] w-[100%] h-[40px] rounded-[6px] border-[#DEE2E7] border-t-transparent px-10 focus:outline-none focus:border-[1px] focus:border-[#0D6EFD]" />
                <img src="/navbar component pictures/search.svg" alt="" className="absolute top-3 left-3 " />
            </div>
            </div>
            <div className="w-[100vw] h-[65px]  flex items-center justify-center">
                <div className="w-[100vw] h-[36px] flex justify-evenly">
                    <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[85.85px] h-[36px] rounded-[6px]">
                        All category
                    </div>
                    <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[80.85px] h-[36px] rounded-[6px]">
                        Gadgets
                    </div>
                    <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[80.85px] h-[36px] rounded-[6px]">
                        Clothes
                    </div>
                    <div className="bg-[#EFF2F4] text-[#0D6EFD] flex items-center justify-center w-[80.85px] h-[36px] rounded-[6px]">
                        Accessory
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar