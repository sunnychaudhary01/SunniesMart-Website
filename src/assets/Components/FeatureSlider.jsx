import React, { useEffect, useState } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";


const FeatureSlider = ({ onDataItem, addToCart, wishlistFunc }) => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setFeature(
          response.data.products.filter(
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
        );
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 0,
        },
      },
    ],
  };

  const customSettings = {
    ...settings,
    dots: true,
    dotsClass: "slick-dots custom-dots",
    arrows: false,
  };

  return (
    <>
      <div className="w-[1200px] mx-auto sm:w-full sm:h-[550px] h-[620px] xl:h-[580px] flex flex-col items-center justify-center sm:items-center sm:justify-center sm:gap-5 relative top-[580px] sm:top-[650px] md:w-full lg:w-full xl:w-[100vw] md:top-[100px]">
        <p className="text-[43px] sm:text-[26px] relative sm:bottom-[8px] bottom-[30px] font-semibold sm:w-full lg:w-full sm:flex sm:justify-center md:flex md:items-center md:justify-center lg:flex lg:justify-center md:relative sm:items-center sm:relative ">
          <span>Feature Collection</span>
        </p>
        <div className="w-[1190px] h-full pl-[10px] sm:pl-[0] md:pl-0 sm:h-[335px] sm:w-[100%] md:w-[100%] lg:w-[100%] md:h-[90vh] xl:w-full flex items-center md:items-start sm:items-start sm:justify-start md:justify-center justify-around gap-[31px] sm:gap-[40px] md:gap-[20px] overflow-hidden">
          <Slider className="w-full sm:w-full" {...customSettings}>
            {Array.isArray(feature) &&
              feature.map((product, index) => (
                <div
                  key={index}
                  className="slider-container h-[85%] w-[265px] sm:w-[170px] sm:h-[260px] md:h-[345px] md:w-full lg:h-[365px] lg:w-[275px] rounded-3xl flex flex-col items-center sm:flex-col md:flex-col md:items-center md:justify-center md:mb-[10px] lg:mb-0 mb-[10px]"
                >
                  <div className="h-auto w-[265px] sm:w-full md:w-[245px] xl:w-[230px] xl:h-[365px] md:h-full sm:h-full lg:w-full lg:h-full bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start shrink-0 sm:ml-1">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full h-full flex flex-col items-center justify-center sm:z-[998]"
                    >
                      <div className="h-[250px] w-[100%] sm:h-[180px] sm:w-[100%] md:h-[200px] lg:h-[230px] xl:h-[220px] xl:w-[230px] lg:w-full bg-black relative flex flex-col items-center justify-center rounded-3xl">
                        <span
                          className="absolute top-2 right-5 sm:right-2 flex items-center justify-center bg-[#f6f6f6] text-black font-bold w-[80px] h-[25px] sm:w-[34%] sm:h-[16%]
                          sm:text-[13px] rounded-full"
                        >
                          {product.discountPercentage + "%"}
                        </span>
                        <img
                          src={product.thumbnail}
                          className="h-[250px] w-[250px] sm:h-[120px] sm:w-[120px] md:h-[180px] md:w-[180px] lg:h-[180px] lg:w-[180px] xl:h-[220px] object-cover shadow-md rounded-3xl"
                          alt=""
                        />
                      </div>
                      <div className="h-[120px] sm:h-[51%] w-full sm:w-[90%] flex flex-col items-start justify-around sm:justify-around sm:rounded-3xl pl-7 sm:pl-0">
                        <div className="h-[150px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[90%] sm:w-[100%] sm:pl-[5px] sm:h-[20px] pr-1 sm:text-balance leading-0 flex items-center justify-start">
                          <p className="text-[17px] sm:text-sm text-[#000] sm:leading-[15px] sm:font-semibold font-bold capitalize overflow-hidden">
                            {product.title}
                          </p>
                        </div>
                        <div className="h-full sm:h-[50px] w-full sm:pl-[5px] flex flex-col items-end justify-around sm:justify-around sm:items-center">
                          <p className="text-[19px] flex flex-col sm:text-[14px] w-full relative left-1 sm:left-0 font-bold leading-none capitalize text-[#000]">
                            Rs{" "}
                            {(product.price -
                              (product.discountPercentage / 100) *
                                product.price)
                              .toString()
                              .slice(0, 5).replace(".", ",") + ".00"}
                            <span className="text-[18px] sm:text-[13px] font-normal leading-none capitalize text-[#000] line-through">
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
                    <div className="h-full w-full sm:h-[25%] flex justify-end items-center relative bottom-[40px] sm:bottom-[42px]">
                      <FaHeart
                        onClick={() => wishlistFunc(product)}
                        className="relative right-[50px] sm:right-[20px] lg:right-[35px] xl:right-[35px] bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"
                      />
                      <FaCartArrowDown
                        onClick={() => addToCart(product)}
                        className="relative right-[30px] sm:right-[12px] bottom-[5px] sm:bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>

        <div className="h-[70px] sm:h-[50px] w-full relative sm:top-[0px] top-[25px] md:top-[0px] flex items-center justify-center">
          <Link to="products">
            <button className="h-[50px] w-[135px] sm:h-[40px] sm:w-[100px] font-semibold text-[17px] text-white bg-[#8888fa] hover:border-2 hover:border-gray-700 rounded-lg capitalize hover:bg-transparent hover:text-gray-700 transition duration-500 ease-in-out">
              View all
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeatureSlider;
