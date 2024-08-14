import React, { useState } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const FeatureSlider = ({ onDataItem, addToCart }) => {
  const [feature, setFeature] = useState([]);
  const [slide, setSlide] = useState(0);

  const rightSlide = () => {
    if (window.innerWidth <= 1024 ) {
      slide < 5 ? setSlide(slide + 1.10) : 0
    }else if (window.innerWidth <= 426) {
      slide < 6 ? setSlide(slide + 1.10) : 0
    } else if (slide < 4) {
      setSlide(slide + 1.10);
    } 
  };

  const leftSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1.10);
    } else {
      setSlide(slide);
    }
  };

  const handleFeature = (val) => {
    setFeature(val);
  };

  return (
    <>
      <div className="w-[1200px] mx-auto sm:w-full sm:h-[65vh] h-[600px] flex flex-col items-center justify-center 
      sm:items-center sm:justify-center sm:gap-5 relative top-[580px] sm:top-[650px] md:w-full md:top-[100px]">
        <p className="text-[43px] sm:text-[26px] relative sm:bottom-[8px] bottom-[30px] font-semibold sm:w-full sm:flex sm:justify-center md:flex md:items-center md:justify-center md:relative  sm:items-center sm:relative">
         <span>Feature Collection</span> 
        </p>
        <div className="w-full h-[100vh] sm:w-full sm:h-[57vh] md:h-full absolute flex items-center justify-between">
          <button
            className="w-10 h-12 sm:h-12 sm:w-12 sm:rounded-full z-[999] bg-slate-50 hover:bg-[#fff] rounded-md flex items-center justify-center text-20 text-[#6d6b6b] hover:text-[#353030]"
            onClick={leftSlide}
          >
            <SlArrowLeft />
          </button>
          <button
            className="w-10 h-12 sm:h-12 sm:w-12 sm:rounded-full z-[999] bg-slate-50 hover:bg-[#fff] rounded-md flex items-center justify-center text-20 text-[#6d6b6b] hover:text-[#353030] mr-[0px]"
            onClick={rightSlide}
          >
            <SlArrowRight />
          </button>
        </div>

        <div className="w-[1190px] h-full pl-[10px] sm:pl-[0] md:pl-0 sm:h-[57vh] sm:w-[98%] md:w-[100%] md:h-[90vh] flex items-center md:items-start sm:items-start sm:justify-start md:justify-start justify-around gap-[31px] sm:gap-[10px] md:gap-[20px] overflow-hidden">
          {Array.isArray(feature) &&
            feature
              .filter(
                (item) =>
                  item.title === "Essence Mascara Lash Princess" ||
                  item.title === "Wooden Bathroom Sink With Mirror" ||
                  item.title === "Annibale Colombo Bed" ||
                  item.title === "Cooking Oil" ||
                  item.title === "Ice Cream" ||
                  item.title === "Eyeshadow Palette with Mirror" ||
                  item.title === "Cucumber" ||
                  item.title === "Kiwi"
              )
              .map((product, index) => (
                <div
                  key={index}
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                  className="h-auto rounded-3xl w-[270px] sm:w-[50%] sm:h-[43vh] md:w-[46%] md:ml-[10px] flex md:items-center items-center justify-center transition shrink-0 duration-1000 ease-in-out"
                >
                  <div className="h-auto w-[100%] sm:w-full md:w-full sm:h-full bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start shrink-0">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full h-full flex flex-col items-center justify-center">
                     <div className="h-[250px] w-[100%] sm:h-[32vh] sm:w-[100%] bg-black relative flex flex-col items-center justify-center rounded-3xl">
                          <span
                            className="absolute top-2 right-5 sm:right-2 flex items-center justify-center bg-[#f6f6f6] text-black font-bold w-[80px] h-[25px] sm:w-[34%] sm:h-[16%]
                              sm:text-[13px] rounded-full"
                          >
                            {product.discountPercentage + "%"}
                          </span>
                          <img
                            src={product.thumbnail}
                            className="h-[250px] w-[250px] sm:h-[70%] sm:w-[60%] object-cover shadow-md rounded-3xl"
                            alt=""
                          />
                        </div>
                      <div className="h-[120px] sm:h-[51%] w-full sm:w-[90%] flex flex-col items-start justify-around sm:justify-around sm:rounded-3xl pl-7 sm:pl-0">
                        <div className="h-[150px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[90%] sm:w-[100%] sm:pl-[10px] sm:h-[20px] pr-1 sm:text-balance sm:leading-[18px] leading-0 flex items-center justify-start">
                          <p className="text-[17px] sm:text-sm text-[#000] font-bold capitalize overflow-hidden">
                            {product.title}
                          </p>
                        </div>
                        <div className="h-full sm:h-[50px] w-full sm:pl-[10px] flex flex-col items-end justify-around sm:justify-around sm:items-center">
                          <p className="text-[19px] flex flex-col sm:text-sm w-full relative left-1 sm:left-0 font-bold leading-none capitalize text-[#000]">
                            Rs{" "}
                            {(product.price -
                              (product.discountPercentage / 100) *
                                product.price)
                              .toString()
                              .slice(0, 4) + "0"}
                            <span className="text-[18px] sm:text-sm font-normal leading-none capitalize text-[#000] line-through">
                              Rs
                              {product.price
                                .toString()
                                .slice(0, 6)
                                .replace(".", ",") + ".00"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="h-full w-full md:w-full sm:h-[25%] flex justify-end items-center relative bottom-[40px] sm:bottom-[49px] md:pr-[10px]">
                      <FaHeart onClick={()=>wishlistFunc(product)}
                        className=" relative right-[50px] sm:right-4 bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[30px] text-[#000]"
                        size={30}
                      />
                      <FaCartArrowDown
                        onClick={() => addToCart(product)}
                        className="relative right-[30px] sm:right-[10px] bottom-[5px] sm:bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[32px] text-[30px] text-[#000]"
                      />
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="h-[70px] sm:h-[50px] w-full relative sm:top-[0px] top-[25px] md:top-[0px] flex items-center justify-center">
          <Link to="products">
            <button className="h-[50px] w-[135px] sm:h-[40px] sm:w-[100px] font-semibold text-[17px] text-white bg-[#8888fa] hover:border-2 hover:border-gray-700 rounded-lg capitalize hover:bg-transparent hover:text-gray-700 transition duration-500 ease-in-out">
              View all
            </button>
          </Link>
        </div>
      </div>
      <Data onDataItem={handleFeature} />
    </>
  );
};

export default FeatureSlider;