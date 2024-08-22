import React from "react";
import Footer from "./assets/Components/Footer";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const WhishLIst = ({ wishlist, removeWishlistItem }) => {
  return (
    <>
      <div className="w-full lg:w-full xl:w-full xl:min-h-screen min-h-screen sm:w-full sm:h-full ">
        <div className="h-[120px] sm:h-[100px] w-full sm:w-full lg:w-full bg-gray-200  flex items-center justify-center">
          <p className="text-[40px] sm:text-[32px] font-semibold tracking-wider">Wishlist</p>
        </div>
        <div className="min-h-[100vh] mb-[100px] w-full xl:w-full md:w-full sm:pl-0 lg:pl-0 md:pl-0 pl-[100px] xl:pl-0">
          <div className="h-[100%] sm:w-full relative top-[50px] xl:w-[100%] xl:min-h-screen sm:top-8 flex flex-wrap sm:flex-wrap md:flex md:flex-wrap md:justify-center xl:justify-center lg:justify-center justify-start pl-[20px] sm:pl-0 md:pl-0 xl:pl-0 sm:items-center sm:justify-center items-start rounded-3xl w-full gap-4 md:gap-[8px] lg:gap-8 xl:gap-8 sm:gap-0">
            {wishlist.map((product, id) => (
              <div key={id}
              className="h-[85%] w-[265px] sm:w-[48%] sm:h-[265px] md:w-[45%] md:h-[375px] rounded-3xl flex flex-col items-center sm:flex-col md:flex-col md:items-center md:justify-center md:mb-[10px] sm:mb-[10px] sm:ml-[2px]">
            <div className="h-auto w-[265px] sm:w-full md:w-[270px] md:h-[350px] sm:h-full bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start shrink-0">
              <Link to={`/products/${product.id}`} className="w-full h-full flex flex-col items-center justify-center sm:z-[998] ">
               <div className="h-[250px] w-[100%] sm:h-[32vh] sm:w-[100%] md:h-[200px] bg-black relative flex flex-col items-center justify-center rounded-3xl">
                    <span
                      className="absolute top-2 right-5 sm:right-2 flex items-center justify-center bg-[#f6f6f6] text-black font-bold w-[80px] h-[25px] sm:w-[34%] sm:h-[16%]
                        sm:text-[13px] rounded-full">
                      {product.discountPercentage + "%"}
                    </span>
                    <img
                      src={product.thumbnail}
                      className="h-[250px] w-[250px] sm:h-[160px] sm:w-[150px] md:h-[180px] md:w-[180px] object-cover shadow-md rounded-3xl"
                      alt=""
                    />
                  </div>
                <div className="h-[120px] sm:h-[51%] w-full sm:w-[90%] flex flex-col items-start justify-around sm:justify-around sm:rounded-3xl pl-7 sm:pl-0">
                  <div className="h-[150px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[90%] sm:w-[100%] sm:pl-[5px] sm:h-[20px] pr-1 sm:text-balance sm:leading-[18px] leading-0 flex items-center justify-start">
                    <p className="text-[17px] sm:text-sm md:text-[20px] text-[#000] font-bold capitalize overflow-hidden">
                      {product.title}
                    </p>
                  </div>
                  <div className="h-full sm:h-[50px] w-full sm:pl-[5px] flex flex-col items-end justify-around sm:justify-around sm:items-center">
                    <p className="text-[19px] flex flex-col sm:text-[14px] md:text-[20px] w-full relative left-1 sm:left-0 font-bold leading-none capitalize text-[#000]">
                      Rs{" "}
                      {(product.price -
                        (product.discountPercentage / 100) *
                          product.price)
                        .toString()
                        .slice(0, 4)
                        .replace(".", ",") + ".00"}
                      <span className="text-[18px] sm:text-[13px] md:text-[19px] font-normal leading-none capitalize text-[#000] line-through">
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
              <div className="h-full w-full  sm:w-full md:w-full sm:h-[25%] flex justify-end items-center relative bottom-[40px] sm:bottom-[40px] md:bottom-[40px] ">
                <FaTrash onClick={()=>removeWishlistItem(id)}
                  className="relative right-[50px] sm:right-[18px] md:right-[50px] md:text-[30px] bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-red-700"/>
              </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhishLIst;
