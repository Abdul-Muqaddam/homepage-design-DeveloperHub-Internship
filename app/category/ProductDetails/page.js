"use client";

// import CardRecommended from '@/app/components/cardRecommended'
import CardRecommended from '@/app/components/cardRecommended'
import { toggleContext } from '@/app/context/toggleContextProvider';
import Description from '@/app/components/Description';


import React, { useState, useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import Reviews from '@/app/components/reviews';
import Shipping from '@/app/components/shipping';
import AboutSeller from '@/app/components/AboutSeller';
import { useRouter } from 'next/navigation';


const ProductDetails=()=> {

  const { description } = useContext(toggleContext)
  const { reviews } = useContext(toggleContext)
  const { shipping } = useContext(toggleContext)
  const { aboutSeller } = useContext(toggleContext)

  const  {cart,setCart} = useContext(toggleContext)

  const [showMore, setShowMore] = useState(false)

  const is650px = useMediaQuery({ minWidth: 650 })
  const is1000px = useMediaQuery({ minWidth: 1000 })
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  const { categoryProduct } = useContext(toggleContext)


  //state to create hover Effect
  const [isHover, setIsHover] = useState(false)

  //create a state for mouse move
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })



  //update the state accourding to mouse move
  const handleMouseMove = (e) => {
    //Destructuring properties left,top,width,height from  getBoundingClientRect() function
    const { height, width, top, left } = e.target.getBoundingClientRect()


    //e.Pagex is help to find where the mouse is on the screen x-axis horizontally
    //e.PageY is help to find where the mouse is on the screen y-axis horizontally


    //width and heigh and left and top also is the thing which is destructed from getBoundingClientRect() which help to get the heigh and width of element

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y })
  }

  const router=useRouter()

  const handleshope=()=>{
    router.push("/")
  }

  const [addedCartSuccess,setAddedCartSuccess] = useState(false)

  const handleCart=()=>{
    setCart([...cart, {src:categoryProduct.src,price:categoryProduct.price,title:categoryProduct.title}])
    setAddedCartSuccess(true)

    setTimeout(()=>{
      setAddedCartSuccess(false)
    },1000)

    
  }

  return (
    <>


      <div className={"w-[100vw] h-[56px] flex justify-center items-center"}>
        <div className={"w-[90vw] flex justify-between"}>
          <div>
            <img src="/category component/backarrow.svg" alt="" className={"h-[16px] w-[16px]"} />
          </div>
          <div className={"flex items-center gap-6 relative"}>
            <div>
            <img src="/navbar component pictures/shopping cart.svg" alt="" className={"h-[20px] w-[20px] cursor-pointer"} onClick={handleCart} />
            <div className={`absolute  -left-6 text-white bg-green-500 w-[70px] rounded-[6px] flex items-center justify-center ${addedCartSuccess?"":"hidden"}`}>Added</div>
            </div>
            <img src="/navbar component pictures/profile.svg" alt="" className={"h-[16px] w-[16px]"} />
          </div>
        </div>
      </div>




      <div className={`w-[100vw]  flex items-center gap-4 ${is650px ? "" : "flex-col"} ${is1000px ? "justify-evenly" : "justify-around"}  text-[#F0F0F0]`} >
        <img src={(categoryProduct.src).slice(1)} alt="" className={`${is1000px ? "w-[24.39vw]" : is650px ? "w-[35.39vw] h-[58.5vh]" : "w-[70vw] h-[70vh]"}  transition-all duration-300 ease-in-out  `} onMouseMove={(e) => { setIsHover(true); handleMouseMove(e) }} onMouseLeave={() => { setIsHover(false); setZoomPosition({ x: 0, y: 0 }) }} style={{ transform: isHover ? "scale(2)" : "scale(1)", transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }} />
        <div className={`flex flex-col gap-3 ${is1000px ? "w-[32vw]" : is650px ? "w-[44vw]" : "w-[90vw]"}  `}>

          <div className={"flex items-center gap-1"} >
            <div className={"flex items-center "}>
              <img src="/category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
              <img src="/category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
              <img src="/category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
              <img src="/category component/star_shin.svg" alt="" className={"h-[16px] w-[16px]"} />
              <img src="/category component/star.svg" alt="" className={"h-[16px] w-[16px]"} />
            </div>
            <div>
              <img src="/category component/Dot.svg" alt="" />
            </div>
            <div className={"flex items-center gap-1"}>
              <img src="/category component/chat.svg" alt="" className={"w-[15px] h-[15px]"} />
              <div className={"text-[#8B96A5]"}>
                32 reviews
              </div>
            </div>
            <div>
              <img src="/category component/Dot.svg" alt="" />
            </div>
            <div className={"flex items-center gap-1"}>
              <img src="/category component/shopping.svg" alt="" className={"w-[15px] h-[15px]"} />
              <div className={"text-[#8B96A5]"}>
                154 sold
              </div>
            </div>
          </div>




          <div className={`${is650px ? "w-[40vw]" : "w-[90vw]"} flex flex-col gap-1`}>


            <div className={"flex gap-2 "}>
              <img src="/category component/check.svg" alt="" />
              <div className={"text-[#00B517]"}>
                In Stock
              </div>
            </div>

            <div className={" text-black font-semibold text-[20px]"}>
              {categoryProduct.title}
            </div>
            <div className={"flex items-center gap-2"}>
              <div className={"text-[#FA3434] font-semibold"}>
                ${categoryProduct.price}
              </div>
              <div className={"text-[#8B96A5] text-[13px]"}>
                &#40; 50-100 pcs	&#41;
              </div>
            </div>
          </div>



          <div className={`w-[90vw] ${is650px ? "hidden" : ""}`}>
            <div className={"flex items-center gap-3 "}>
              <button className={"w-[75vw] bg-[#0d78ff] text-white h-[40px] rounded-[6px]"}>
                Send Inquiry
              </button>
              <button className={"h-[40px] w-[40px] flex justify-center items-center border-[0.5px] rounded-[6px]"}>
                <img src="/category component/love.svg" alt="" />
              </button>
            </div>
          </div>



          <div className={`w-[90vw]  ${is650px ? "hidden" : ""}`}>
            <div className={"flex gap-9"}>
              <div className={"text-[#8B96A5]"}>Condition</div>
              <div className={"text-[#505050]"}>Brand new</div>
            </div>
            <div className={"flex gap-12"}>
              <div className={"text-[#8B96A5]"}>Material</div>
              <div className={"text-[#505050]"}>Plastic</div>
            </div>
            <div className={"flex gap-10"}>
              <div className={"text-[#8B96A5]"}>Category</div>
              <div className={"text-[#505050]"}>Electronics,gadgets</div>
            </div>
            <div className={"flex gap-9"}>
              <div className={"text-[#8B96A5]"}>item num</div>
              <div className={"text-[#505050]"}>23421</div>
            </div>
          </div>

          <div className={` flex flex-col gap-[6px] ${is1000px ? "w-[32vw]" : is650px ? "w-[40vw]" : "hidden w-[90vw]"}`}>
            <div className={"flex gap-[6rem]"}>
              <div className={"text-[#8B96A5]"}>Price</div>
              <div className={"text-[#505050]"}>Negotiable</div>
            </div>
            <hr />
            <div className={"flex gap-[5.85rem]"}>
              <div className={"text-[#8B96A5]"}>Type:</div>
              <div className={"text-[#505050]"}>Classic shoes</div>
            </div>
            <div className={"flex gap-[4.3rem]"}>
              <div className={"text-[#8B96A5]"}>Material:</div>
              <div className={"text-[#505050]"}>Plastic Meterial</div>
            </div>
            <div className={"flex gap-[5.1rem]"}>
              <div className={"text-[#8B96A5]"}>Design</div>
              <div className={"text-[#505050]"}>Modern Nice</div>
            </div>
            <hr />
            <div className={"flex gap-6"}>
              <div className={"text-[#8B96A5]"}>Customization:</div>
              <div className={"text-[#505050] w-[22vw]"}>Customization logo and design custom packages</div>
            </div>
            <div className={"flex gap-[3.3rem]"}>
              <div className={"text-[#8B96A5]"}>Protection:</div>
              <div className={"text-[#505050]"}>Refund Policy</div>
            </div>
            <div className={"flex gap-16"}>
              <div className={"text-[#8B96A5]"}>Warranty</div>
              <div className={"text-[#505050]"}>2 year full Warranty</div>
            </div>
          </div>

        </div>
        <div className={`${is1000px ? "text-black border border-[#DEE2E7] rounded-[6px] flex flex-col gap-2 items-center w-[280px] " : "hidden"}`}>
          <div className={"flex items-center gap-2 w-[90%] mt-4"}>
            <div className={"font-semibold text-[28px] text-[#4CA7A7] bg-[#C6F3F1] h-[48px] w-[48px] rounded-[6px] flex items-center justify-center"}>
              R
            </div>
            <div>
              <div>
                Supplier
              </div>
              <div>
                Guanjoi Tranding LLC
              </div>
            </div>
          </div>
          <hr />
          <div className={"w-[90%] flex flex-col gap-1"}>
            <div className={"flex gap-2"}>
              <img src="/category component/germany.svg" alt="" />
              <div className={"text-[#8B96A5]"}>
                Germany, Berlin
              </div>
            </div>
            <div className={"flex gap-3"}>
              <img src="/category component/verification.svg" alt="" />
              <div className={"text-[#8B96A5]"}>
                Verified Seller
              </div>
            </div>
            <div className={"flex gap-2"}>
              <img src="/category component/www.svg" alt="" />
              <div className={"text-[#8B96A5]"}>
                Worldwide shipping
              </div>
            </div>
          </div>
          <hr />
          <div className={"flex flex-col gap-2 mb-4"}>
            <button className={"text-[white] bg-[#0B75FF] h-[40px] w-[228px] rounded-[6px] font-medium"}>
              Send Inquiry
            </button>
            <button className={"text-[#0B75FF] h-[40px] w-[228px] rounded-[6px] border-2 border-[#DEE2E7] font-medium"} >
              Seller's Profile
            </button>
          </div>
        </div>
      </div>

      <div className={"flex justify-center w-[100vw] flex-col gap-3 items-center "}>

        <div className={"flex items-center gap-1 w-[90vw]"}>



        </div>

        <div className={`${is650px ? "hidden" : ""}`}>

          <div className={"w-[90vw] flex flex-col"}>
            Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and

          </div>
          <div className={`${showMore ? "block w-[90vw]" : "hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, recusandae! Nulla molestiae at amet quos eos nemo itaque pariatur, voluptatibus, unde fugit delectus?
          </div>
          <button className={"text-[#0d78ff] w-[95vw] cursor-pointer"} onClick={handleShowMore}>
            <div className={"w-[80px] "}>

              {showMore ? "Read Less" : "Read more"}
            </div>
          </button>
        </div>

        {description ? <Description /> : ""}
        {reviews ? <Reviews /> : ""}
        {shipping ? <Shipping /> : ""}
        {aboutSeller ? <AboutSeller /> : ""}


        <div className={`w-[90vw]  border-[0.5px] flex flex-col justify-evenly h-[20vh] ${is1000px ? "hidden" : ""} `}>
          <div className={"flex justify-center "}>

            <div className={"flex w-[90%] justify-between items-center"}>
              <div className={"flex gap-3"}>
                <div className={"bg-[#C6F3F1] h-[48px] w-[48px] flex items-center justify-center text-[28px] font-semibold text-[#4CA7A7] rounded-[4px]"}>
                  R
                </div>
                <div>
                  <div>
                    Supplier
                  </div>
                  <div>
                    Guanjoi Trading LLC
                  </div>
                </div>
              </div>
              <div>
                <img src="/category component/right.svg" alt="" className={"w-[7px] h-[12px]"} />
              </div>

            </div>
          </div>
          <hr />

          <div className={"flex justify-center"}>
            <div className={"w-[80vw] gap-2 flex items-center"}>

              <div className={" flex items-center gap-1"}>
                <img src="/category component/germany.svg" alt="" className={"w-[20px] h-[14px]"} />
                <div>
                  Germany
                </div>
              </div>
              <div className={"flex items-center gap-1"}>
                <img src="/category component/verification.svg" alt="" className={"w-[15px] h-[18.88px]"} />
                <div>
                  Verification
                </div>
              </div>
              <div className={"flex items-center gap-1"}>
                <img src="/category component/www.svg" alt="" className={"w-[17px] h-[17px]"} />
                <div>
                  Shipping
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={"w-[100vw] flex items-center justify-center"}>
          <div className={"w-[90vw] text-[18px] font-semibold"}>
            <div className={"h-[50px] flex items-center"}>
              Similar products
            </div>
            <div className={"flex overflow-auto min-w-[100vw] gap-3 scroll-ba"}>
              <CardRecommended src={"/7th section/bag.svg"} price={"10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/shirt.svg"} price={"10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/jacket.svg"} price={"10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/pants.svg"} price={"10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/pants.svg"} price={"10.30"} description={"Solid backpack blue jeans larger size"} />
            </div>
          </div>
        </div>


        <div className={`${is1000px?"":"hidden"} w-[90vw] flex h-[110px] `}>
          <div className={"bg-[#237CFF] w-[60%] rounded-l-[6px] flex  items-center justify-center"}>
            <div className={"w-[90%]"}>
            <div className={"font-bold text-[24px] text-[white]"}>Super discount on more</div>
            <div className="text-white" >Have you ever finally just write dummy info</div>
            </div>
          </div>
          <div className={"bg-[#005ADE] w-[40%] rounded-r-[6px] flex items-center"}>
            <div className={"w-[85%] flex items-center justify-end"}>
            <button className={"text-[white] bg-[#FF9017] w-[108px] h-[40px] rounded-[6px]"} onClick={handleshope}>
                Shop now
            </button>
            </div>
          </div>
        </div>

      </div>





    </>
  )
}

export default ProductDetails