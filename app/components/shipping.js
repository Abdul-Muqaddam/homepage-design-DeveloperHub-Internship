import react,{useContext} from "react";
import { toggleContext } from "../context/toggleContextProvider";


const Shipping=()=>{
    const {setDescription}=useContext(toggleContext)
    const {setReviews}=useContext(toggleContext)
    const {SetAboutSeller}=useContext(toggleContext)
    const {setShipping}=useContext(toggleContext)
    const handleDescription=()=>{
        setDescription(true)
        setShipping(false)
    }
    const handleReviews=()=>{
        setReviews(true)
        setShipping(false)
    }
    const handleAboutSeller=()=>{
        SetAboutSeller(true)
        setShipping(false)
    }
    return(
        <>
        <div className="flex gap-4 w-[90vw] text-[#505050] p-2 border-b border-[#DEE2E7]">
                <button onClick={handleDescription}><u> Description</u></button>
                <button onClick={handleReviews}><u> Reviews </u></button>
                <button className={"text-[#0d6efd]"}><u> Shipping </u></button>
                <button onClick={handleAboutSeller}><u> About Seller </u></button>
            </div>
            <div>this is shipping</div>
        </>
    )
}
export default Shipping;