"use client";

import react,{useState,useContext} from "react"
import { useMediaQuery } from "react-responsive";
import { toggleContext } from "../context/toggleContextProvider";


const SideFilter = () => {

    const is900px =useMediaQuery({maxWidth:900})

    const [categoryHidden,setCategoryHidden]=useState(false)
    const [brandHidden,setBrandHidden]=useState(false)
    const [FeaturesHidden,setFeaturesHidden]=useState(false)


    const handleCategoryClick=()=>{
        setCategoryHidden(!categoryHidden)
    }
    const handleBrandClick=()=>{
        setBrandHidden(!brandHidden)
    }
    const handleFeatureClick=()=>{
        setFeaturesHidden(!FeaturesHidden)
    }
    const handleSetCategoryFalse=()=>{
        setCategoryHidden(false)
    }
    const handleSetBrandFalse=()=>{
        setBrandHidden(false)
    }
    const handleSetFeatureFalse=()=>{
        setFeaturesHidden(false)
    }

    const { selectedItems, setSelectedItems  } = useContext(toggleContext);

    const handleCheckBoxChange = (event, name) => {
        if (event.target.checked) {
            const newItem = { id: Date.now() + Math.random(), name };
    
            
            setSelectedItems([...selectedItems, newItem]);
    
            
            
        } else {
            
            setSelectedItems( selectedItems.filter((item) => item.name !== name));
                    
        }
        

    };
    
    
return (


    <div className={` gap-5 mt-[2vh] ml-10 w-[15vw] ${is900px ? "hidden" : " flex flex-col"}`}>
        <div className="flex flex-col gap-1" >
            <div className={"flex items-center gap-10 cursor-pointer" } onClick={handleCategoryClick}>
                <div className={"font-semibold"}> 
                    Category
                </div>
                <div>
                    <img src="/category component/upArrow.svg" alt="" className={`${categoryHidden?" rotate-180 ":""} transition-all duration-300 ease-in-out`} />
                </div>
            </div>
            <div className={`text-[#505050] ${categoryHidden?"hidden":""} cursor-pointer transition-all duration-300 ease-in-out` }>
                Mobile accessory
            </div>
            <div className={`text-[#505050] ${categoryHidden?"hidden":""} cursor-pointer transition-all duration-300 ease-in-out`}>
                Electronics
            </div>
            <div className={`text-[#505050] ${categoryHidden?"hidden":""} cursor-pointer transition-all duration-300 ease-in-out`}>
                Smartphones
            </div>
            <div className={`text-[#505050] ${categoryHidden?"hidden":""} cursor-pointer transition-all duration-300 ease-in-out`}>
                Modern tech
            </div>
            <div className={`cursor-pointer text-[#0D6EFD] ${categoryHidden?"":"hidden"} `} onClick={handleSetCategoryFalse}>
                See all
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <hr />
            <div className={"flex items-center gap-10" } onClick={handleBrandClick}>
                <div className={"font-semibold"}>
                    Brand
                </div>
                <div>
                    <img src="/category component/upArrow.svg" alt="" className={`${brandHidden?" rotate-180 ":""} transition-all duration-300 ease-in-out`} />
                </div>
            </div>
            <div className={`flex gap-2 ${brandHidden?"hidden":""}`}>
                <input type="checkbox" id="samsung" onChange={(e)=>handleCheckBoxChange(e,"Samsung")} checked={selectedItems.some(item=>item.name=="Samsung")} />
                <label htmlFor="samsung" >
                    Samsung
                </label>
            </div>
            <div className={`flex gap-2 ${brandHidden?"hidden":""}`}>
                <input type="checkbox" id="Apple" onChange={(e)=>handleCheckBoxChange(e,"Apple")} checked={selectedItems.some(item=>item.name=="Apple")}/>
                <label htmlFor="Apple">
                    Apple
                </label>
            </div>
            <div className={`flex gap-2 ${brandHidden?"hidden":""}`}>
                <input type="checkbox" id="Huawei" onChange={(e)=>handleCheckBoxChange(e,"Huawei")} checked={selectedItems.some(item=>item.name=="Huawei")}/>
                <label htmlFor="Huawei">
                    Huawei
                </label>
            </div>
            <div className={`flex gap-2 ${brandHidden?"hidden":""}`}>
                <input id="pocco" type="checkbox" onChange={(e)=>handleCheckBoxChange(e,"Pocco")}  checked={selectedItems.some(item=>item.name=="Pocco")}/>
                <label htmlFor="pocco">
                    Pocco
                </label>
            </div>
            <div className={`flex gap-2 ${brandHidden?"hidden":""}`}>
                <input type="checkbox" id="Lenovo" onChange={(e)=>handleCheckBoxChange(e,"Lenovo")} checked={selectedItems.some(item=>item.name=="Lenovo")}/>
                <label htmlFor="Lenovo">
                    Lenovo
                </label>
            </div>
            <div className={`cursor-pointer text-[#0D6EFD] ${brandHidden?"":"hidden"} `} onClick={handleSetBrandFalse}>
                See all
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <hr />
            <div className={"flex items-center gap-10"} onClick={handleFeatureClick}>
                <div className={"font-semibold"}>
                    Features
                </div>
                <div>
                    <img src="/category component/upArrow.svg" alt=""  className={`${FeaturesHidden?"rotate-180":""} duration-300 `}/>
                </div>
            </div>
            <div className={`flex gap-2 ${FeaturesHidden?"hidden":""}`} >
                <input type="checkbox" id="Matallic" onChange={(e)=>handleCheckBoxChange(e,"Matallic")} checked={selectedItems.some(item=>item.name=="Matallic")} />
                <label htmlFor="Matallic">
                    Metallic
                </label>
            </div>
            <div className={`flex gap-2 ${FeaturesHidden?"hidden":""}`}>
                <input type="checkbox" id="Plastic Cover" onChange={(e)=>handleCheckBoxChange(e,"Plastic Cover")} checked={selectedItems.some(item=>item.name=="Plastic Cover")}/>
                <label htmlFor="Plastic Cover">
                    Plastic cover
                </label>
            </div>
            <div className={`flex gap-2 ${FeaturesHidden?"hidden":""}`}>
                <input type="checkbox" id="8GB RAM" onChange={(e)=>handleCheckBoxChange(e,"8GB RAM")} checked={selectedItems.some(item=>item.name=="8GB RAM")}/>
                <label htmlFor="8GB RAM">
                    8GB RAM
                </label>
            </div>
            <div className={`flex gap-2 ${FeaturesHidden?"hidden":""}`}>
                <input type="checkbox" id="super power" onChange={(e)=>handleCheckBoxChange(e,"super power")} checked={selectedItems.some(item=>item.name=="super power")}/>
                <label htmlFor="super power">
                    Super power
                </label>
            </div>
            <div className={`flex gap-2 ${FeaturesHidden?"hidden":""}`}>
                <input type="checkbox" id="large Memory" onChange={(e)=>handleCheckBoxChange(e,"Large Memory")} checked={selectedItems.some(item=>item.name=="Large Memory")}/>
                <label htmlFor="Large Memory">
                    Large Memory
                </label>
            </div>
            <div className={`cursor-pointer text-[#0D6EFD] ${FeaturesHidden?"":"hidden"} `} onClick={handleSetFeatureFalse}>
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
                    <img src="/category component/upArrow.svg" alt="" className={"rotate-180"} />
                </div>
            </div>
        </div>
        <div>
            <hr />
            <div className={"flex items-center gap-[3.3rem]"}>
                <div className={"font-semibold"}>
                    Condition
                </div>
                <div>
                    <img src="/category component/upArrow.svg" alt="" className={"rotate-180"} />
                </div>
            </div>
        </div>
        <div>
            <hr />
            <div className={"flex items-center gap-[4.4rem]"}>
                <div className={"font-semibold"}>
                    Ratings
                </div>
                <div>
                    <img src="/category component/upArrow.svg" alt="" className={"rotate-180"} />
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
)
}

export default SideFilter;