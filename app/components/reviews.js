import react,{useContext} from "react";
import { toggleContext } from "../context/toggleContextProvider";


const Reviews = () => {
    const {setDescription}=useContext(toggleContext)
    const {setShipping}=useContext(toggleContext)
    const {setAboutSeller}=useContext(toggleContext)
    const {setReviews}=useContext(toggleContext)
    const handleDescription=()=>{
        setDescription(true)
        setReviews(false)
    }
    const handleShipping=()=>{
        setShipping(true)
        setReviews(false)
    }
    const handleAboutSeller=()=>{
        setAboutSeller(true)
        setReviews(false)
    }
    return (
        <>
            <div className="flex gap-4 w-[90vw] text-[#505050] p-2 border-b border-[#DEE2E7]">
                <button onClick={handleDescription} ><u> Description</u></button>
                <button className={"text-[#0d6efd]"}><u> Reviews </u></button>
                <button onClick={handleShipping}><u> Shipping </u></button>
                <button onClick={handleAboutSeller}><u> About Seller </u></button>
            </div>
            <div>this is reviews</div>
        </>
    )
}
export default Reviews