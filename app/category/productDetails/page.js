"use client";

// import CardRecommended from '@/app/components/cardRecommended'
import CardRecommended from '@/app/components/cardRecommended'
import RootLayout from '@/app/layout'
import React from 'react'
import { useMediaQuery } from 'react-responsive';

function productDetails() {

  return (
    <>


      <div className={"w-[100vw] h-[56px] flex justify-center items-center"}>
        <div className={"w-[90vw] flex justify-between"}>

          <div>
            <img src="/category component/backarrow.svg" alt="" className={"h-[16px] w-[16px]"} />
          </div>
          <div className={"flex items-center gap-6"}>
            <img src="/navbar component pictures/shopping cart.svg" alt="" className={"h-[20px] w-[20px]"} />
            <img src="/navbar component pictures/profile.svg" alt="" className={"h-[16px] w-[16px]"} />
          </div>
        </div>
      </div>


      <div className={"w-[100vw] h-[305px] flex items-center justify-center text-[#F0F0F0]"}>
        <img src="/7th section/coat.svg" alt="" className={"w-[275px] h-[275px]"} />
      </div>


      <div className={"flex justify-center w-[100vw] flex-col gap-3 items-center "}>

        <div className={"flex items-center justify-between w-[90vw]"}>

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
            <div>
              32 reviews
            </div>
          </div>
          <div>
            <img src="/category component/Dot.svg" alt="" />
          </div>
          <div className={"flex items-center gap-1"}>
            <img src="/category component/shopping.svg" alt="" className={"w-[15px] h-[15px]"} />
            <div>
              154 sold
            </div>
          </div>
        </div>




        <div className={"w-[90vw]"}>

          <div className={"font-medium"}>
            Product Name Goes here
          </div>
          <div className={"flex items-center gap-2"}>
            <div className={"text-[#FA3434] font-semibold"}>
              $129.95
            </div>
            <div className={"text-[#8B96A5] text-[13px]"}>
              &#40; 50-100 pcs	&#41;
            </div>
          </div>
        </div>



        <div className={"w-[90vw] "}>
          <div className={"flex items-center gap-3 "}>
            <button className={"w-[70vw] bg-[#0d78ff] text-white h-[40px] rounded-[6px]"}>
              Send Inquiry
            </button>
            <button className={"h-[40px] w-[40px] flex justify-center items-center border-[0.5px] rounded-[6px]"}>
              <img src="/category component/love.svg" alt="" />
            </button>
          </div>
        </div>



        <div className={"w-[90vw] "}>
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

        <div className={"w-[90vw] flex flex-col"}>
          Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ...

        </div>
          <button className={"text-[#0d78ff] w-[90vw] "}>
            Read more
          </button>


        <div className={"w-[90vw]  border-[0.5px] flex flex-col justify-evenly h-[20vh]"}>
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

          <div className={"flex items-center gap-2"}>
            <div className={"flex items-center gap-1"}>
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


        <div className={"w-[100vw] flex items-center justify-center"}>
          <div className={"w-[90vw] text-[18px] font-semibold"}>
            <div className={"h-[50px] flex items-center"}>
              Similar products
            </div>
            <div className={"flex overflow-auto min-w-[100vw] gap-3 scroll-ba"}>
              <CardRecommended src={"/7th section/bag.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/shirt.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/jacket.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/pants.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
              <CardRecommended src={"/7th section/pants.svg"} price={"$10.30"} description={"Solid backpack blue jeans larger size"} />
            </div>
          </div>
        </div>

  
      </div>





    </>
  )
}

export default productDetails