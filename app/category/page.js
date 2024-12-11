"use client"
import CardCategoryGrid from "../components/cardCategoryGrid"
import CardCategoryList from "../components/cardCategoryList"
import CardRecommended from "../components/cardRecommended"
import { useMediaQuery } from "react-responsive"
import SideFilter from "../components/sideFilter"
import { useState, useContext } from "react"
import { toggleContext } from "../context/toggleContextProvider"
import { useRouter } from "next/navigation"





const Category = () => {
    const is450px = useMediaQuery({ minWidth: 450 })
    const is650px = useMediaQuery({ minWidth: 650 })
    const is900px = useMediaQuery({ minWidth: 900 })
    
    
    const { selectedItems, setSelectedItems } = useContext(toggleContext);
    
    const {setCategoryProduct}=useContext(toggleContext)
    
    const handleRemoveFilter = (name) => {
        setSelectedItems(selectedItems.filter((item) => item.name != name))
    }
    const [cardsGrid, setCardsGrid] = useState([
        {
            index: 1,
            title: "Regular Fit Resort Shirt",
            src: "./5th section/infinix mobile.svg",
            price: "500.70",
            stprice: "$150"
        },
        {
            index: 2,
            src: "./5th section/redmi mobile.svg",
            price: "500.70",
            stprice: "",
        },
        {
            index: 3,
            src: "./5th section/red phone.svg",
            price: "500.70",
            stprice: "",
        },
        {
            index: 4,
            src: "./3rd section/laptop.svg",
            price: "500.70",
            stprice: "$150",
        },
        {
            index: 5,
            src: "./5th section/watch.svg",
            price: "500.70",
            stprice: "$150"
        },
        {
            index: 6,
            src: "./5th section/redmi mobile.svg",
            price: "500.70",
        },
        {
            index: 7,
            src: "./3rd section/camera.svg",
            price: "500.70",
            stprice: "$150"
        },
        {
            index: 8,
            src: "./3rd section/headset.svg",
            price: "500.70",
            stprice: "$150"
        },
        {
            index: 9,
            src: "./5th section/iphone.svg",
            price: "500.70",
            stprice: "$150"
        }
    ])

    const [cardsList, setCardsList] = useState(
        [
            {
                src: "./5th section/infinix mobile.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",

            },
            {
                src: "./5th section/redmi mobile.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",

            },
            {
                src: "./5th section/red phone.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",
            },
            {
                src: "./3rd section/laptop.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",
            },
            {
                src: "./5th section/watch.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",
            },
            {
                src: "./5th section/redmi mobile.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",
            },
            {
                src: "./3rd section/camera.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",
            },
            {
                src: "./3rd section/headset.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",
            },
            {
                src: "./5th section/iphone.svg",
                title: "Regular Fit Resort Shirt",
                price: "50.70",
                orders: "154 orders",

            }
        ]
    )


    const [cardsRecommended, setCardsRecommended] = useState([
        {
            
            src: "./7th section/bag.svg",
            price: "$10.30",
            description: "Solid backpack blue jeans larger size",
        },
        {
            src: "./5th section/watch.svg",
            price: "$10.30",
            description: "Solid backpack blue jeans larger size",
        },
        {
            src: "./3rd section/laptop.svg",
            price: "$10.30",
            description: "Solid backpack blue jeans larger size",
        },
        {
            src: "./5th section/iphone.svg",
            price: "$10.30",
            description: "Solid backpack blue jeans larger size",
        },
        {
            src: "./5th section/red phone.svg",
            price: "$10.30",
            description: "Solid backpack blue jeans larger size",
        }


    ])


    const router=useRouter();

    const handleProductDetails = (src,title,price) => {
        setCategoryProduct({src:src,title,title,price:price})
        router.push("/category/productDetails")
    }


    return (
        <>

            <hr />


            <div className="flex ">



                <SideFilter />
                <div>

                    <div className={`flex items-center justify-center ${is900px ? "w-[80vw]" : " w-[100vw]"}  h-[50px]  `}>



                        <div className={`flex  gap-2 ${is900px ? "w-[78vw]" : is650px ? "w-[92vw]" : "w-[94.5vw]"} text-[0.9rem] `}>




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




                    <div className={`flex items-center justify-center ${is900px ? "w-[80vw]" : " w-[100vw]"}  h-[50px]`}>
                        <div className={` ${is900px ? "w-[78vw]" : is650px ? "w-[92vw]" : "w-[95vw]"} `}>

                            <div className={`flex ${is900px ? "w-[78vw]" : is650px ? "w-[92vw]" : "w-[95vw]"} gap-3`}>
                                {selectedItems.map((selectedItems) => (
                                    <div
                                        key={selectedItems.id}
                                        className="flex gap-2 items-center border-[1px] border-[#0D6EFD] rounded-[5px] w-[130px] h-[32px] justify-center"
                                    >
                                        <div>{selectedItems.name}</div>
                                        <img
                                            src="./category component/cross.svg"
                                            alt="Remove"
                                            className="h-[12px] w-[12px] cursor-pointer"
                                            onClick={() => handleRemoveFilter(selectedItems.name)}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <div className={` ${is650px ? "flex flex-col gap-2" : is450px ? "flex gap-2" : "  "}   items-center justify-center `}>
                        <div className={` ${is650px ? "flex  gap-2  justify-center" : " flex items-center justify-center  gap-2"} flex-wrap`}  >

                            {is450px ? cardsGrid.map((parameter) => (
                                <div onClick={()=>handleProductDetails(parameter.src,parameter.title,parameter.price)}>
                                    <CardCategoryGrid key={parameter.index} src={parameter.src} price={parameter.price} stprice={parameter.stprice} />
                                </div>
                            )) :

                                cardsList.map((parameter) => (
                                    <div onClick={()=>handleProductDetails(parameter.src,parameter.title,parameter.price)}>
                                        <CardCategoryList src={parameter.src} title={parameter.title} price={parameter.price} orders={parameter.orders} />
                                    </div>
                                    ))}

                        </div>
                    </div>

                </div>
            </div>
            <div className={"w-[100vw] flex items-center justify-center"}>
                <div className={"w-[90vw] text-[18px] font-semibold"}>
                    <div className={"h-[50px] flex items-center"}>
                        You may also like
                    </div>
                    <div className={`flex  ${is900px ? "" : "overflow-auto"} min-w-[80vw] gap-3 `}>
                        {
                            cardsRecommended.map((parameter) => (
                                <CardRecommended key={parameter.id} src={parameter.src} description={parameter.description} price={parameter.price} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category
