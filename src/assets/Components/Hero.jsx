import React, { useState, useEffect } from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa6";
import Data from "./Data";
import { Link } from "react-router-dom";
import FeatureSlider from "./FeatureSlider";
import QuotesSlider from "./QuotesSlider";
import Service from "./Service";
import Footer from "./Footer";
import WhishLIst from "../../WhishLIst";

const Hero = ({ onDataItem, addToCart, wishlistFunc }) => {
  const [prod, SetProd] = useState([]);
  const [pro, SetPro] = useState("fragrances");
  const [time, setTime] = useState(new Date());
  const [activeIndex, setActiveIndex] = useState([false, false, false]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(time);

  const SetProt = (category, index) => {
    SetPro(category);
    setActiveIndex((prevIndexes) =>
      prevIndexes.map((val, idx) => (idx === index ? !val : null))
    );
    // console.log(activeIndex)
  };

  const handleItem = (val) => {
    SetProd(val);
  };
  useEffect(() => {
  }, [prod]);

  if (!prod) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-500"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-slate-500 animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-[1200px] h-[500px]  flex  items-center mx-auto md:w-[100vw] lg:w-full xl:w-full sm:w-[93%] sm:h-[50vh] md:h-[100vh] lg:h-[800px] sm:flex sm:flex-wrap sm:items-center sm:justify-center md:justify-center lg:justify-center lg:items-center pt-[180px] sm:pt-[80px] ">
        <div className="w-full md:w-full sm:h-[60vh] md:h-[600px] lg:w-[80vw] xl:w-full md:flex md:flex-wrap sm:flex sm:flex-wrap flex  items-center md:items-center md:justify-center lg:flex lg:flex-wrap lg:justify-center lg:items-center md:gap-1 lg:gap-6 xl:gap-1 md:pt-[10px] sm:pt-0">
          {Array.isArray(prod) &&
            prod
              .filter(
                (item) =>
                  item.title === "Cat Food" ||
                  item.title === "Chanel Coco Noir Eau De" ||
                  item.title === "Powder Canister" ||
                  item.title === "Annibale Colombo Bed"
              )
              .map((product, index) => (
                <div key={index} className="h-[270px] w-full sm:w-[50%] md:w-[49%] lg:w-[275px] xl:w-[252px] lg:h-[280px] md:h-[220px] sm:h-[170px] hover:text-blue-600 transition 300 ease-in-out rounded-2xl flex items-center md:items-start justify-center sm:p-6 p-2">
                  <Link to={`/products/${product.id}#section1`}>
                    <div className="h-[320px] w-[250px] sm:h-[29vh] sm:w-[44vw] md:h-[270px] md:w-[280px] lg:h-[260px] lg:w-[265px] border  bg-[#e4cfcf] flex flex-col items-center justify-center rounded-2xl shadow-xl">
                      <img
                        src={product.thumbnail}
                        className="h-[240px] w-full sm:h-[120px] sm:w-[120px] md:h-[160px] md:w-[160px] lg:h-[160px] lg:w-[160px] object-cover rounded-2xl"
                        alt=""
                      />
                      <p className="pt-[15px] sm:pt-0 text-[21px] sm:text-[16px] font-bold capitalize">
                        {product.category}
                      </p>
                    </div>
                    <p className="h-[20px] capitalize cursor-pointer text-xl font-bold relative top-[15px]"></p>
                  </Link>
                </div>
              ))}
        </div>
      </div>

      <div className="h-screen w-[1200px] md:w-[100%] lg:w-[100vw] xl:w-[100vw] mx-auto relative top-[200px] sm:top-[200px] sm:h-[98vh] sm:w-[98%]">
        <div className="w-[1200px] flex justify-between items-center xl:pt-0 pt-10 sm:pt-0 md:h-[16vh] md:w-full lg:w-[100vw] xl:w-full lg:p-2 sm:h-[17vh] sm:w-full md:px-5">
          <div className="w-full h-[50px] flex flex-col items-start justify-center sm:h-[17vh] sm:w-[220px] lg:p-3 xl:p-3 ">
            <p className="text-4xl font-bold sm:text-[19px] sm:pl-[5px]">
              Best Selling
            </p>
            <span className="w-[70px] h-[5px]">
              <div className="w-[40px] sm:w-[30px] h-[3px] border-none mt-2 sm:mt-0 sm:ml-[5px] bg-sky-400"></div>
            </span>
          </div>
          <div className="h-full w-full flex justify-end items-center sm:justify-end sm:h-[17vh] md:w-full md:h-[10vh] sm:w-full sm:pr-[10px] lg:p-3 xl:p-3 ">
            <ul className="flex gap-3 sm:gap-2 md:gap-3 sm:text-[13px] md:text-[17px] md:font-semibold font-bold cursor-pointer">
              <li
                className={
                  activeIndex[0]
                    ? "underline underline-offset-[12px] text-blue-500"
                    : ""
                }
                onClick={() => SetProt("fragrances", 0)}
              >
                Perfume
              </li>
              <li
                className={
                  activeIndex[1]
                    ? "underline underline-offset-[12px] text-blue-500"
                    : ""
                }
                onClick={() => SetProt("groceries", 1)}
              >
                Grocery
              </li>
              <li
                className={
                  activeIndex[2]
                    ? "underline underline-offset-[12px] text-blue-500"
                    : ""
                }
                onClick={() => SetProt("beauty", 2)}
              >
                Skin-Care
              </li>
            </ul>
          </div>
        </div>

        <section className="h-screen w-[100%] md:w-full lg:w-[100vw] xl:w-full sm:flex sm:items-center sm:flex-col md:flex md:flex-col md:items-start md:justify-start xl:justify-start lg:items-center lg:justify-center flex flex-col md:h-[800px] lg:h-[900px] sm:h-[650px] sm:mb-[20px] sm:w-[100%]">
          <div className="h-[70%] md:w-full lg:w-[90vw] lg:p-2 md:h-[550px] lg:h-[900px] xl:h-[400px] relative top-[50px] sm:top-0 md:top-[30px] xl:top-4 flex md:flex-wrap sm:flex-wrap justify-center sm:justify-center sm:items-center md:items-center md:justify-center items-start rounded-3xl w-full sm:w-full sm:h-[550px] gap-[35px] xl:gap-4 sm:gap-2 md:gap-6 lg:flex lg:flex-wrap lg:gap-8 xl:p-2">
            {Array.isArray(prod) &&
              prod
                .filter((item) => item.category === pro)
                .slice(0, 4)
                .map((product, index) => (
                  <div key={index} className="h-[85%] w-[265px] sm:w-[179px] sm:h-[260px] md:w-[35%] md:h-[345px] lg:h-[365px] lg:w-[275px] rounded-3xl flex flex-col items-center sm:flex-col md:flex-col md:items-center md:justify-center md:mb-[10px] lg:mb-0 mb-[10px] sm:mb-[20px] xl:w-[230px] xl:h-[370px]">
                  <div className="h-auto w-[100%] sm:w-[170px] md:w-full md:h-full sm:h-full lg:w-full lg:h-full xl:w-full xl:h-full bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start shrink-0 sm:ml-1">
                    <Link to={`/products/${product.id}#section1`} className="w-full h-full flex flex-col items-center justify-center sm:z-[998]">
                     <div className="h-[250px] w-[100%] sm:h-[180px] sm:w-[100%] md:h-[200px] lg:h-[230px] lg:w-full xl:h-[230px] xl:w-[230px] bg-black relative flex flex-col items-center justify-center rounded-3xl">
                          <span
                            className="absolute top-2 right-5 sm:right-2 flex items-center justify-center bg-[#f6f6f6] text-black font-bold w-[80px] h-[25px] sm:w-[34%] sm:h-[16%]
                              sm:text-[13px] rounded-full">
                            {product.discountPercentage + "%"}
                          </span>
                          <img
                            src={product.thumbnail}
                            className="h-[250px] w-[250px] sm:h-[120px] sm:w-[120px] md:h-[180px] md:w-[180px] lg:h-[180px] lg:w-[180px]  object-cover shadow-md rounded-3xl"
                            alt=""
                          />
                        </div>
                      <div className="h-[120px] sm:h-[51%] w-full sm:w-[90%] flex flex-col items-start justify-around sm:justify-around sm:rounded-3xl pl-7 sm:pl-0">
                        <div className="h-[150px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[90%] sm:w-[100%] sm:pl-[5px] sm:h-[20px] pr-1 sm:text-balance  leading-0 flex items-center justify-start">
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
                              .slice(0, 4) + "00"}
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
                      <FaHeart onClick={()=>wishlistFunc(product)}
                        className="relative right-[50px] sm:right-[20px] xl:right-[35px] bottom-[5px] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"/>
                      <FaCartArrowDown
                        onClick={() => addToCart(product)}
                        className="relative right-[30px] sm:right-[12px] bottom-[5px] sm:bottom-[5px] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"
                      />
                    </div>
                  </div>
                  </div>
                ))}
          </div>

          <div className="h-[100px] w-full sm:h-[50px] relative top-[20px] sm:top-[35px] md:relative md:top-[290px] lg:top-[70px]   flex items-center justify-center">
            <Link to="products">
              <button className="h-[50px] w-[135px] sm:h-[40px] sm:w-[100px] font-semibold text-[17px] text-white bg-[#8888fa] hover:border-2 hover:border-gray-700 rounded-lg capitalize hover:bg-transparent hover:text-gray-700 transition duration-500 ease-in-out">
                View all
              </button>
            </Link>
          </div>
        </section>
      </div>

      <section className="h-[70vh] sm:h-[400px] md:h-[80vh] xl:h-[450px] sm:w-full w-full lg:w-full bg-[#e4cfcf] relative top-[370px] sm:top-[500px] md:top-[750px] lg:relative lg:top-[930px] ">
        {prod
          .filter((item) => item.title === "Annibale Colombo Sofa")
          .map((product, index) => (
            <div key={index} className="h-full w-full lg:w-full xl:w-full flex md:flex md:justify-center md:items-center">
              <Link to={`/products/${product.id}#section1`} className="flex">
                <img
                  className="h-full w-[570px] xl:w-[450px] xl:h-[450px] sm:hidden md:hidden object-cover relative top-[50px] left-[20px] "
                  src={product.thumbnail}
                  alt="" />
                <div className="h-full w-[50vw] sm:w-full md:w-full lg:w-[98vw] xl:w-full md:h-[60vh] sm:relative flex flex-col items-center justify-start sm:justify-center sm:items-center md:flex md:justify-center md:items-center xl:items-center xl:justify-start md:gap-[20px] ">
                  <h2 className="relative top-[40px] sm:top-[0px] md:top-0 sm:w-full sm:flex sm:items-center sm:justify-around text-[58px] sm:text-[28px] md:text-[50px] lg:text-[49px] xl:text-[48px] font-semibold">
                    Best Offer - Up to{" "}
                    <span className="text-[#5255ffac] font-bold "> 50% </span>{" "}
                  </h2>
                  <p className="relative top-[38px] sm:top-[0px] md:top-0 sm:text-center text-[19px] sm:w-full md:w-full sm:p-2 sm:text-[17px] md:text-[22px] sm:flex sm:items-start sm:justify-center md:text-center font-semibold md:flex md:justify-center md:items-center xl:text-center md:px-[60px]">
                    Explore our latest New Arrivals & unlock discounts of up to
                    50% off!
                  </p>
                  <div className="h-[150px] w-[320px] sm:w-[200px] sm flex-wrap relative top-[45px] md:top-[0px] sm:top-[0px] md:h-[100px] flex items-center justify-around gap-0 ">
                    <div className="h-[70px] w-[60px] sm:h-[60px] sm:w-[60px] text-2xl font-medium flex flex-col items-center justify-center bg-zinc-50 rounded-md">
                      {days} <p className="text-base font-normal">Days</p>
                    </div>
                    <div className="h-[70px] w-[60px] sm:h-[60px] sm:w-[60px] text-2xl font-medium flex flex-col items-center justify-center bg-zinc-50 rounded-md ">
                      {hours} <p className="text-base font-normal"> Hrs</p>
                    </div>
                    <div className="h-[70px] w-[60px] sm:h-[60px] sm:w-[60px] text-2xl font-medium flex flex-col items-center justify-center bg-zinc-50 rounded-md">
                      {minutes} <p className="text-base font-normal">Mins</p>
                    </div>
                    <div className="h-[70px] w-[60px] sm:h-[60px] sm:w-[60px] text-2xl font-medium flex flex-col items-center justify-center bg-zinc-50 rounded-md">
                      {seconds} <p className="text-base font-normal">Secs</p>
                    </div>
                  </div>
                  <div className="relative top-[50px] sm:top-[20px] md:top-[0px] ">
                    <button className="h-[50px] w-[130px] sm:h-[40px] sm:w-[100px] font-semibold text-[16px] text-white bg-[#8888fa] hover:border-2 hover:border-gray-700 rounded-lg capitalize hover:bg-transparent hover:text-gray-700 transition duration-500  ease-in-out">
                      Shop Now
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </section>

      <section className="h-full w-full md:h-[90vh] md:w-full lg:w-full md:relative md:top-[850px] lg:relative lg:top-[600px]">
        <FeatureSlider addToCart={addToCart} wishlistFunc={wishlistFunc} />
      </section>
      <section className="h-[400px] w-full relative top-[800px] md:top-[1130px] lg:relative lg:top-[1300px] ">
        <QuotesSlider />
      </section>
      <section className="h-[400px] sm:h-[450px] sm:w-full md:w-full lg:w-full w-full flex sm:flex sm:flex-wrap md:flex-wrap sm:items-center sm:justify-center md:items-center md:justify-center items-center justify-center relative sm:top-[650px] top-[750px] md:top-[1050px] lg:relative lg:top-[1265px]">
        <Service />
      </section>
      <section className="h-full w-full relative top-[700px] md:top-[1090px] lg:top-[1200px]">
        <Footer />
      </section>
      <Data onDataItem={handleItem} />
    </>
  );
};

export default Hero;
