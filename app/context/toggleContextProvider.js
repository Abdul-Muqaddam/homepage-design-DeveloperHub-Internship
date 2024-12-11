"use client";


import React, { createContext, useState } from "react";

export const toggleContext=createContext();
export const ToggleContextProvider=({children})=>{
    
    const [toggleSideBar,setToggleSideBar]=useState(false)
    const [selectedItems,setSelectedItems]=useState([])
    const [filters, setFilters] = useState([]); 
    const [categoryProduct,setCategoryProduct]=useState({src:" " , title:" " , price:" "})
    const [description,setDescription]=useState(true)
    const [reviews,setReviews]=useState(false)
    const [shipping,setShipping]=useState(false)
    const [aboutSeller,SetAboutSeller]=useState(false)
    const [cart,setCart]=useState([])

    return(
        <toggleContext.Provider value={{toggleSideBar,setToggleSideBar,selectedItems,setSelectedItems,filters,setFilters,setCategoryProduct,categoryProduct,description,setDescription,reviews,setReviews,shipping,setShipping,aboutSeller,SetAboutSeller,cart,setCart}}>
        {children}
        </toggleContext.Provider>
    )
}