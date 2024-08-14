import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Data from "./Data";
import { Link } from "react-router-dom";

const Sliders = ({ onDataItem }) => {
  const [slide, setSlide] = useState(0);
  const [product, setProduct] = useState([]);

  const previous = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : 2));
  };

  const next = () => {
    setSlide((prev) => (prev < 2 ? prev + 1 : 0));
  };

useEffect(() => {
  const interval = setInterval(() => {
  // next() 
}, 2500);
return () => clearInterval(interval);
}, [next])



  const handleItem = (val) => {
    setProduct(val);
  };
  
  return (
    <>
      <div className="w-full h-[100vh] mx-auto sm:h-[95vh] overflow-hidden sm:flex sm:justify-center flex items-center  relative">
        <div className="w-[90vw] sm:w-[100vw] h-[5vh] mx-[65px] sm:mx-[5px]  absolute sm:top-[200px]  flex items-center justify-between sm:justify-between z-[10]">
          <button
            onClick={previous}
            className="w-10 h-16 z-[999] pl-[20px] text-[#6d6b6b] hover:text-[#353030]"
          >
            <SlArrowLeft size={27}  />
          </button>
          <button
            onClick={next}
            className="w-10 h-16 z-[999] text-[#6d6b6b] hover:text-[#353030]"
          >
            <SlArrowRight size={27}  />
          </button>
        </div>
        <div className="w-full h-full sm:h-full sm:items-start flex items-center" style={{ transform: `translateX(-${slide * 100}%)`}}>
          {product.filter(
              (products) =>
                products.title === "Chanel Coco Noir Eau De" ||
                products.title === "Honey Jar" ||
                products.title === "Knoll Saarinen Executive Conference Chair"
            )
            .map((item, index) => (
              <div
                key={index}
                className="w-full h-full sm:w-full  sm:h-full sm:gap-2 flex items-center rounded-xl shadow-lg bg-[#f9ebeb] shrink-0">
                <Link to={`/products/${item.id}`} className="w-full sm:w-full h-full sm:flex-col flex items-center">
                  <div className="w-[50%] sm:h-[48vh] sm:w-[50vw] h-[55vh] sm:pt-[30px] z-[999] flex justify-center items-center">
                    <img className="h-[80vh] w-[40vw] sm:h-[35vh] sm:w-full object-cover"
                      src={item.thumbnail}
                      alt={item.title} />
                  </div>
                  <div className="w-[50%] h-full sm:w-[80vw] sm:max-h-[50%] sm:flex sm:justify-center sm:items-center  sm:pt-[0px] md:pt-[20px] flex flex-col justify-center items-start sm:p-1 p-8">
                    <h2 className="text-5xl sm:text-[34px] md:w-full md:text-[34px] sm:text-center sm:flex  sm:items-center sm:justify-center font-semibold">{item.title}</h2>
                    <p className="h-[150px] w-[78%] sm:h-[100px] sm:flex sm:items-center sm:p-1 sm:justify-center sm:w-full sm:text-center sm:text-[16px] sm:pt-[40px] pt-[40px] text-[22px] font-normal text-gray-700">
                      {item.description}
                    </p>
                    <button className="h-[50px] w-[145px] sm:h-[35px] sm:w-[105px] z-[999] font-semibold sm:text-[15px] text-[17px] text-white bg-[#8888fa] hover:border-2 hover:border-gray-700 rounded-sm capitalize hover:bg-transparent hover:text-gray-700 transition duration-500 ease-in-out sm:mt-[45px] md:mt-[110px] mt-[100px]">
                      Shop Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Data onDataItem={handleItem} />
    </>
  );
};

export default Sliders;