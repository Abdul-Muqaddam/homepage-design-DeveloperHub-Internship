import react ,{useContext} from "react";
import { toggleContext } from "../context/toggleContextProvider";
const AboutSeller = () =>{
    const {setDescription}=useContext(toggleContext)
    const {setReviews}=useContext(toggleContext)
    const {setShipping}=useContext(toggleContext)
    const {SetAboutSeller}=useContext(toggleContext)
    const handleDescription=()=>{
        setDescription(true)
        SetAboutSeller(false)
    }
    const handleReviews=()=>{
        setReviews(true)
        SetAboutSeller(false)
    }
    const handleShipping=()=>{
        setShipping(true)
        SetAboutSeller(false)
    }
    return(
        <>
        <div className="flex gap-4 w-[90vw] text-[#505050] p-2 border-b border-[#DEE2E7]">
                <button onClick={handleDescription} ><u> Description</u></button>
                <button onClick={handleReviews}><u> Reviews </u></button>
                <button onClick={handleShipping}><u> Shipping </u></button>
                <button className={"text-[#0d6efd]"} ><u> About Seller </u></button>
            </div>
            <div>this is AboutSeller</div>
        </>
    )
}
export default AboutSeller