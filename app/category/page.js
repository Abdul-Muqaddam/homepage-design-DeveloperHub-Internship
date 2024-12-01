"use client"
import CardCategoryGrid from "../components/cardCategoryGrid"
import CardCategoryList from "../components/cardCategoryList"
import CardRecommended from "../components/cardRecommended"
import { useMediaQuery } from "react-responsive"


const Category = () => {
    const is450px = useMediaQuery({ maxWidth: 450 })
    const is650px = useMediaQuery({ maxWidth: 650 })
    const is900px =useMediaQuery({maxWidth:900})
    return (
        <>
            <hr />

    <div className={`flex items-center justify-center w-[100vw] h-[50px]  `}>

            <div className={` gap-2 mt-[38rem] ml-10 ${is900px?"hidden":" flex flex-col"}`}>
                <div>

                    <div className={"flex items-center gap-10"}>
                        <div className={"font-semibold"}>
                            Category
                        </div>
                        <div>
                            <img src="/category component/upArrow.svg" alt="" />
                        </div>
                    </div>
                    <div className={"text-[#505050]"}>
                        Mobile accessory
                    </div>
                    <div className={"text-[#505050]"}>
                        Electronics
                    </div>
                    <div className={"text-[#505050]"}>
                        Smartphones
                    </div>
                    <div className={"text-[#505050]"}>
                        Modern tech
                    </div>
                    <div className={"cursor-pointer text-[#0D6EFD]"}>
                        See all
                    </div>
                </div>
                <div>
                    <hr />
                    <div className={"flex items-center gap-10"}>
                        <div className={"font-semibold"}>
                            Brand
                        </div>
                        <div>
                            <img src="/category component/upArrow.svg" alt="" />
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Samsung
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Apple
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Huawei
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Pocco
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Lenovo
                        </div>
                    </div>
                    <div className={"cursor-pointer text-[#0D6EFD] "}>
                        See all
                    </div>
                </div>
                <div>
                    <hr />
                    <div className={"flex items-center gap-10"}>
                        <div className={"font-semibold"}>
                            Features
                        </div>
                        <div>
                            <img src="/category component/upArrow.svg" alt="" />
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Metallic
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Plastic cover
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            8GB RAM
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Super power
                        </div>
                    </div>
                    <div className={"flex gap-2"}>
                        <input type="checkbox" />
                        <div>
                            Large Memory
                        </div>
                    </div>
                    <div className={"cursor-pointer text-[#0D6EFD] "}>
                        See all
                    </div>
                </div>
                <div>
                <hr />
                    <div className={"flex items-center gap-10"}>
                        <div className={"font-semibold"}>
                            Price Range
                        </div>
                        <div>
                            <img src="/category component/upArrow.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                <hr />
                    <div className={"flex items-center gap-10"}>
                        <div className={"font-semibold"}>
                            Condition
                        </div>
                        <div>
                            <img src="/category component/upArrow.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                <hr />
                    <div className={"flex items-center gap-10"}>
                        <div className={"font-semibold"}>
                            Ratings
                        </div>
                        <div>
                            <img src="/category component/upArrow.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                    <div className={"flex items-center gap-10"}>
                        <div className={"font-semibold"}>
                            Manufacturer
                        </div>
                        <div>
                            <img src="/category component/upArrow.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

                <div className={"flex justify-between w-[90vw]"}>




                    <div className={"border-[0.5px] rounded-md flex gap-3 items-center justify-center w-[120px]"}>
                        <div>
                            Sort:Newest
                        </div>
                        <img src="./category component/sort.svg" alt="" className={"w-[14px] h-[9px]"} />
                    </div>
                    <div className={"flex gap-3 items-center justify-center rounded-md border-[0.5px] w-[95px]"}>
                        <div>
                            Filter (3)
                        </div>
                        <img src="./category component/filter.svg" alt="" className={"h-[12px] w-[12px] "} />
                    </div>
                    <div className={"flex items-center w-[60px]"}>
                        <div className={"h-[30px] w-[30px] flex items-center justify-center border-[0.5px] rounded-l-md"}>
                            <img src="./category component/grid.svg" alt="" className={"w-[15px] h-[15px] "} />
                        </div>
                        <div className={"h-[30px] w-[30px] flex items-center justify-center border-[0.5px] rounded-r-md"}>
                            <img src="./category component/list.svg" alt="" className={"w-[15px] h-[15px]"} />
                        </div>
                    </div>
                </div>
            </div>




            <div className={"flex items-center justify-center w-[100vw] h-[50px]"}>
                <div className={"w-[90vw] "}>

                    <div className={"flex w-[78vw] gap-3"}>
                        <div className={"flex gap-2 items-center border-[1px] border-[#0D6EFD] rounded-[5px] w-[85px] h-[32px] justify-center"}>
                            <div>
                                Huawei
                            </div>
                            <img src="./category component/cross.svg" alt="" className={"h-[12px] w-[12px]"} />
                        </div>
                        <div className={"flex gap-2 items-center border-[1px] border-[#0D6EFD] rounded-[5px] w-[75px] h-[32px] justify-center"}>
                            <div>
                                Apple
                            </div>
                            <img src="./category component/cross.svg" alt="" className={"h-[12px] w-[12px] "} />
                        </div>
                        <div className={"flex gap-2 items-center border-[1px] border-[#0D6EFD] rounded-[5px] w-[75px] h-[32px] justify-center"}>
                            <div>
                                64GB
                            </div>
                            <img src="./category component/cross.svg" alt="" className={"h-[12px] w-[12px]"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={` ${is650px ? "flex" : is450px ? "flex flex-col" : "flex flex-col"}  items-center justify-center gap-4`}>
                <div className={` ${is650px ? "flex flex-col gap-2" : "flex  gap-2  justify-center"} `}>

                    {is450px ? <CardCategoryList src={"./5th section/infinix mobile.svg"} title={"Regular Fit Resort Shirt"} price={"50.70"} orders={"154 orders"} /> : <CardCategoryGrid src={"./5th section/infinix mobile.svg"} price={"50.70"} stprice={"$150"} />}
                    {is450px ? <CardCategoryList src={"./5th section/redmi mobile.svg"} title={"Regular Fit Resort Shirt"} price={"50.70"} orders={"154 orders"} /> : <CardCategoryGrid src={"./5th section/redmi mobile.svg"} price={"50.70"} />}
                    {is450px ? <CardCategoryList src={"./5th section/red phone.svg"} title={"Regular Fit Resort Shirt"} price={"50.70"} orders={"154 orders"} /> : <CardCategoryGrid src={"./5th section/red phone.svg"} price={"50.70"} />}
                </div>



                <div className={` ${is650px ? "flex flex-col gap-2" : "flex  gap-2 justify-center"} `}>

                    {is450px ? <CardCategoryList src={"./3rd section/laptop.svg"} title={"Regular Fit Resort Shirt"} price={"50.70"} orders={"154 orders"} /> : <CardCategoryGrid src={"./3rd section/laptop.svg"} price={"50.70"} stprice={"$150"} />}
                    {is450px ? <CardCategoryList src={"./5th section/watch.svg"} title={"Regular Fit Resort Shirt"} price={"50.70"} orders={"154 orders"} /> : <CardCategoryGrid src={"./5th section/watch.svg"} price={"50.70"} stprice={"$150"} />}
                    {is450px ? <CardCategoryList src={"./5th section/redmi mobile.svg"} title={"Regular Fit Resort Shirt"} price={"50.70"} orders={"154 orders"} /> : <CardCategoryGrid src={"./5th section/redmi mobile.svg"} price={"50.70"} />}
                </div>


            </div>

            <div className={"w-[100vw] flex items-center justify-center"}>
                <div className={"w-[90vw] text-[18px] font-semibold"}>
                    <div className={"h-[50px] flex items-center"}>
                        You may also like
                    </div>
                    <div className={"flex overflow-auto min-w-[100vw] gap-3 scroll-ba"}>
                        <CardRecommended src={"./7th section/bag.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                        <CardRecommended src={"./5th section/watch.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                        <CardRecommended src={"./3rd section/laptop.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                        <CardRecommended src={"./5th section/red phone.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                        <CardRecommended src={"./5th section/red phone.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category
