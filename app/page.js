import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-custom-banner w-[100vw] h-[180px] flex justify-center items-center ">
        <div className="flex flex-col justify-evenly h-[70%] w-[90vw]">
          <div>
            <div className="text-[18px] text-[#1C1C1C]">
              Latest trending
            </div>
            <div className="font-semibold text-[18px] text-[#1C1C1C]">
              Electronic items
            </div>
          </div>
          <div className="text-[#0D6EFD] bg-white w-[91px] h-[30px] flex justify-center items-center">
            Learn more
          </div>
        </div>
      </div>

      <div className="flex w-[100vw] h-[100px] items-center justify-center">
        <div className="flex w-[90vw] justify-between">
          <div>
            <div className="text-[18px] font-semibold">
              Deals and offers
            </div>
            <div className="text-[13px]">
              Electronic equipments
            </div>
          </div>
          <div>
            <div className="flex w-[143px] justify-between">
              <div className="w-[45px] h-[44px] bg-[#EFF2F4] text-[#8B96A5] font-bold flex flex-col justify-center items-center">
                13 <div className="text-[11px] font-normal">Hour</div>
              </div>
              <div className="w-[45px] h-[44px] bg-[#EFF2F4] text-[#8B96A5] font-bold flex flex-col justify-center items-center">
                34 <div className="text-[11px] font-normal">Min</div>
              </div>
              <div className="w-[45px] h-[44px] bg-[#EFF2F4] text-[#8B96A5] font-bold flex flex-col justify-center items-center">
                56 <div className="text-[11px] font-normal">Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[100vw] flex">
        <div className="w-[140px] h-[180px] border-[1px] flex flex-col items-center justify-center border-[#DEE2E7]">
          <div className="h-[98px] w-[98px] flex items-center justify-center">
          <img src="/3rd section/cloth.svg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#1C1C1C] text-[13px]">Smart watches</div>
            <div className="bg-[#FFE3E3] font-medium text-[14px] text-[red] w-[61px] h-[28px] flex items-center justify-center rounded-[29px]">
              -25%
            </div>
          </div>
        </div>
        <div className="w-[140px] h-[180px] border-[1px] flex flex-col items-center justify-center border-[#DEE2E7]">
          <div className="h-[98px] w-[98px] flex items-center justify-center">
          <img src="/3rd section/headphone.svg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#1C1C1C] text-[13px]">Smart watches</div>
            <div className="bg-[#FFE3E3] font-medium text-[14px] text-[red] w-[61px] h-[28px] flex items-center justify-center rounded-[29px]">
              -25%
            </div>
          </div>
        </div>
        <div className="w-[140px] h-[180px] border-[1px] flex flex-col items-center justify-center border-[#DEE2E7]">
          <div className="h-[98px] w-[98px] flex items-center justify-center">
          <img src="/3rd section/laptop.svg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#1C1C1C] text-[13px]">Smart watches</div>
            <div className="bg-[#FFE3E3] font-medium text-[14px] text-[red] w-[61px] h-[28px] flex items-center justify-center rounded-[29px]">
              -25%
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100vw] h-[100px] items-center justify-center">
        <div className="flex w-[90vw] justify-between">
          <div>
            <div className="text-[18px] font-semibold">
              Home and outdoor
            </div>
            
          </div>
          
        </div>
      </div>


      <div className="w-[100vw] flex">
        <div className="w-[140px] h-[180px] border-[1px] flex flex-col items-center justify-center border-[#DEE2E7]">
          <div className="h-[98px] w-[98px] flex items-center justify-center">
          <img src="/4th section/chair.svg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#1C1C1C] text-[13px]">Smart watches</div>
            <div className="text-[#8B96A5]  text-[13px]  w-[81px] h-[28px] flex items-center justify-center rounded-[29px]">
              From USD 19
            </div>
          </div>
        </div>
        <div className="w-[140px] h-[180px] border-[1px] flex flex-col items-center justify-center border-[#DEE2E7]">
          <div className="h-[98px] w-[98px] flex items-center justify-center">
          <img src="/4th section/sofa.svg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#1C1C1C] text-[13px]">Smart watches</div>
            <div className="text-[#8B96A5]  text-[13px]  w-[81px] h-[28px] flex items-center justify-center rounded-[29px]">
              From USD 19
            </div>
          </div>
        </div>
        <div className="w-[140px] h-[180px] border-[1px] flex flex-col items-center justify-center border-[#DEE2E7]">
          <div className="h-[98px] w-[98px] flex items-center justify-center">
          <img src="/3rd section/laptop.svg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#1C1C1C] text-[13px]">Smart watches</div>
            <div className="text-[#8B96A5]  text-[13px]  w-[81px] h-[28px] flex items-center justify-center rounded-[29px]">
              From USD 19
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] flex justify-center">
        <div className="w-[90vw] h-[40px] text-[#0D6EFD]  flex items-center">
          Source now <img src="/4th section/arrow.svg" alt="" className="h-[15px] w-[15px]" />
        </div>
      </div>
    </>

  );
}
