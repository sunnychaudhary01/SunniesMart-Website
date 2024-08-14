import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";

const Service = () => {
  return (
    <>
     <div className="h-[200px] w-[1250px] sm:w-full md:w-full sm:h-[150px] flex sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:justify-center md:flex-wrap md:items-center md:gap-3 md:justify-center mx-auto justify-around">
  <div className="h-[140px] w-[300px] sm:h-[150px] sm:w-[120px] flex sm:flex-col items-center justify-center">
    <div className="flex items-center justify-center pr-[20px]">
      <FaShippingFast size={50} />
    </div>
    <div className="w-full flex flex-col justify-center items-start">
      <h4 className="text-[26px] sm:text-[15px] font-semibold flex sm:flex-col items-center justify-start">
        Free Shipping
      </h4>
      <p>On orders over <strong>Rs 99.</strong></p>
    </div>
  </div>
  <div className="h-[140px] w-[300px] sm:h-[150px] sm:w-[120px]  flex sm:flex-col items-center justify-center">
    <div className="flex items-center justify-center pr-[20px]">
      <GiReceiveMoney size={50} />
    </div>
    <div className="w-full flex flex-col justify-center items-start">
      <h4 className="text-[26px] sm:text-[15px] font-semibold flex sm:flex-col items-start justify-start">
        Money Back
      </h4>
      <p>Money back in 15 days.</p>
    </div>
  </div>
  <div className="h-[140px] w-[300px] sm:h-[150px] sm:w-[120px] flex sm:flex-col items-center justify-center">
    <div className="flex items-center justify-center pr-[20px]">
      <BsFillCreditCard2BackFill size={50} />
    </div>
    <div className="w-full flex flex-col justify-center items-start">
      <h4 className="text-[26px] sm:text-[15px] font-semibold flex items-start justify-start">
        Secure Checkout
      </h4>
      <p>100% payment secure.</p>
    </div>
  </div>
  <div className="h-[140px] w-[300px] sm:h-[150px] sm:w-[120px] flex sm:flex-col items-center justify-center">
    <div className="flex items-center justify-center pr-[20px]">
      <FaHeadphones size={50} />
    </div>
    <div className="w-full flex flex-col justify-center items-start">
      <h4 className="text-[26px] sm:text-[15px] font-semibold flex items-start justify-start">
        Online Support
      </h4>
      <p>Ensure the product quality.</p>
    </div>
  </div>
</div>

    </>
  );
};

export default Service;
