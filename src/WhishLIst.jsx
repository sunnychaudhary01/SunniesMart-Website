import React from "react";
import Footer from "./assets/Components/Footer";
import { FaTrash } from "react-icons/fa";

const WhishLIst = ({ wishlist, removeWishlistItem }) => {
  return (
    <>
      <div className="w-full min-h-screen sm:w-full sm:h-full">
        <div className="h-[120px] sm:h-[100px] w-full sm:w-full  bg-gray-200  flex items-center justify-center">
          <p className="text-[40px] sm:text-[32px] font-semibold tracking-wider">Wishlist</p>
        </div>
        <div className="min-h-[100vh] mb-[100px] w-full sm:pl-0 pl-[100px] ">
          <div className="h-[100%] sm:w-full relative top-[50px] sm:top-8 flex flex-wrap sm:flex-wrap justify-start
          pl-[20px] sm:pl-0 sm:items-center items-start rounded-3xl w-full  gap-4 sm:gap-0">
            {wishlist.map((product, id) => (
              <div key={id}
                className="h-[100%] mb-[30px] w-[265px] sm:w-[49%] sm:h-[42vh] rounded-3xl flex flex-col items-center sm:flex-col">
                <div className="h-[100%] w-[90%] sm:w-[97%] sm:h-[97%] bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start">
                  <div className="h-[240px] w-[100%] sm:h-[25vh] sm:w-[100%] bg-black relative flex flex-col items-center justify-center rounded-3xl">
                    <img src={product.thumbnail}
                      className="h-[250px] w-[250px] sm:h-[70%] sm:w-[60%] object-bottom shadow-md rounded-3xl" alt=""/>
                  </div>
                  <div className="h-[120px] sm:h-[100px]  w-full sm:w-[90%] flex items-center justify-center sm:justify-around sm:rounded-3xl pl-7 sm:pl-2">
                    <div className="h-[80px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[100%] sm:w-[100%] sm:pl-[10px] sm:h-[70px] pr-1 pt-[15px] sm:pt-0 sm:text-balance sm:leading-[18px] leading-0 flex items-start justify-center">
                      <p className="text-[17px] sm:text-sm text-[#000] font-bold sm:leading-4 leading-[18px] capitalize overflow-hidden ">
                        {product.title}
                      </p>
                    </div>
                    <button
                      onClick={() => removeWishlistItem(id)}
                      className="h-[30px] w-[100px] sm:w-[50px] text-2xl sm:text-[20px] text-red-600 font-semibold pb-[11px] flex justify-center items-center  sm:mt-0"
                    >
                      <FaTrash />
                    </button>
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
