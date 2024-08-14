import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Data from "./Data";

const ProductsRef = ({ onDataItem, cart, addToCart, handDec, handInc }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct({ ...response.data, quantity: 1 });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  const handleItem = (val) => {
    setRelatedProducts(val);
  };

  const handleIncrement = () => {
    handInc(product.id);
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1,
    }));
    // Add updated product to cart
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      handDec(product.id);
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1,
      }));
    }
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-slate-800"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-800 animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full sm:w-full sm:h-full h-[100vh]">
        <div className="h-full w-full sm:w-full   bg-zinc-50 flex sm:flex-col items-center justify-around">
          <div
            id="top"
            className="h-full sm:w-full  w-[600px] flex flex-col sm:items-center items-start justify-center sm:pl-[25px] pl-[40px]"
          >
            <div className="w-[400px] h-[400px] sm:w-[250px] sm:h-[250px] sm:mt-[50px] flex items-center sm:justify-center justify-center rounded-xl mr-[40px] bg-[#000] border border-[#f5caca]">
              <img
                className="h-[400px] w-[400px] sm:w-[250px] sm:h-[250px] rounded-xl"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </div>
          <div className="w-full h-full sm:w-full sm:h-full">
            <div className="h-[100vh] w-full sm:w-full flex flex-col items-start justify-start pt-[120px] sm:pt-[30px] sm:pl-[40px] pl-[60px]">
              <h2 className="text-[43px] sm:text-[30px] text-gray-800 font-bold tracking-wide">
                {product.title}
              </h2>
              <div className="h-[50px] w-[600px] sm:w-[100%] sm:h-[80px] flex sm:flex-wrap items-start justify-start sm:items-center sm:justify-start">
                <p className="h-[50px] w-[200px] sm:w-[120px] sm:text-[22px] text-[34px]  pl-[0px] text-gray-700 flex relative top-[10px] font-thin line-through capitalize">
                  Rs.{" "}
                  {product.price.toString().slice(0, 6).replace(".", ",") +
                    ".00"}
                </p>
                <p className="h-[50px] w-[225px] sm:w-[140px] sm:text-[22px] text-[40px]  text-gray-600 flex relative top-[15px] left-[15px] font-semibold leading-none capitalize">
                  Rs.{" "}
                  {(
                    product.price -
                    (product.discountPercentage / 100) * product.price
                  )
                    .toString()
                    .slice(0, 4)
                    .replace(".", ",") + ".00" } 
                </p>
                <span className="relative top-[25px] left-[35px] sm:top-[0px] sm:left-[0px] flex items-center justify-center sm:items-center sm:justify-center bg-[#e6dcdc] text-gray-600 font-bold sm:w-[100px] w-[120px] h-[30px] rounded-md">
                  {" "}
                  Save -{Math.round(product.discountPercentage) + "%"}
                </span>
              </div>
              <div className="h-[100px] w-[510px] sm:w-full pt-[40px] sm:pt-[20px] sm:mb-[0px] mb-[15px] flex sm:flex-col items-start justify-start sm:gap-4 ">
                <div
                  onClick={(e) => e.preventDefault}
                  className="w-[180px] sm:w-full flex items-center"
                >
                  <button
                    onClick={handleDecrement}
                    className="w-[50px] h-[50px] sm:w-[40px] sm:h-[45px] border border-[#ccc] text-xl font-semibold"
                  >
                    -
                  </button>
                  <input
                    className="w-[50px] h-[50px] sm:w-[40px] sm:h-[45px] border border-[#ccc] text-xl font-semibold bg-transparent text-center"
                    type="text"
                    value={product.quantity}
                    readOnly
                  />
                  <button
                    onClick={handleIncrement}
                    className="w-[50px] h-[50px] sm:w-[40px] sm:h-[45px] border border-[#ccc] text-xl font-semibold"
                  >
                    +
                  </button>
                </div>
                <div className="w-[330px] sm:w-full sm:h-[60px] flex sm:justify-start sm:gap-2 justify-between">
                  <button
                    onClick={() => addToCart(product)}
                    className="h-[50px] w-[160px] sm:h-[45px] sm:w-[120px] text-md font-semibold text-white hover:text-black bg-blue-400 hover:border-[2px] border-[#ccc] hover:bg-transparent rounded-sm transition delay-50 ease-in-out">
                    Add to cart
                  </button>
                  <Link to={`/checkout`} >
                  <button className="h-[50px] w-[160px] sm:h-[45px] sm:w-[130px] text-white hover:text-black bg-black hover:border-[2px] border-[#ccc] hover:bg-transparent rounded-sm transition delay-50 ease-in-out">
                    Buy it now
                  </button>
                  </Link>
                </div>
              </div>
              <div className="w-full h-full sm:flex sm:flex-col sm:mt-12 lg:flex lg:flex-col lg:mt-12">
                <div className=" sm:h-[60px] w-full m-0 sm:flex sm:flex-col sm:items-start sm:mt-1 flex items-start lg:h-[60px55lg:justify-start">
                  <p className="text-lg font-bold sm:mt-0 flex items-start justify-between  lg:mt-0 lg:mr-8">
                    Availability:
                  </p>
                  <span className="text-gray-700 ml-2 sm:ml-1 sm:text-left font-semibold lg:ml-0">
                    {product.stock} left in stock
                  </span>
                </div>
                <div className=" sm:h-[60px] w-full m-0 sm:flex sm:flex-col sm:items-start sm:mt-1 lg:flex lg:items-center lg:h-[55px] lg:justify-start">
                  <p className="text-lg font-bold sm:mt-0 flex items-start justify-start  lg:mt-0 lg:mr-16 ">
                    Ratings:
                  </p>
                  <span className="text-gray-700 ml-2 sm:ml-1 sm:text-left font-semibold lg:ml-0 ">
                    {product.rating} stars
                  </span>
                </div>
                <div className=" sm:h-[60px] w-full sm:flex sm:flex-col sm:items-start sm:mt-1 lg:flex lg:items-center lg:h-[55px] lg:justify-start">
                  <p className="text-lg font-bold sm:mt-0 flex items-start justify-start  lg:mt-0 lg:mr-14 ">
                    Delivery:
                  </p>
                  <span className="text-gray-700 ml-2 sm:ml-1 sm:text-left font-semibold lg:ml-0 ">
                    {product.shippingInformation}
                  </span>
                </div>
                <div className=" sm:h-[60px] w-full sm:flex sm:flex-col sm:items-start sm:mt-1 lg:flex lg:items-center lg:h-[55px] lg:justify-start">
                  <p className="text-lg font-bold sm:mt-0 flex items-start justify-start  lg:mt-0 lg:mr-4 ">
                    Return Policy:
                  </p>
                  <span className="text-gray-700 ml-2 sm:ml-1 sm:text-left font-semibold lg:ml-0 ">
                    {product.returnPolicy}
                  </span>
                </div>
                <div className=" sm:h-[60px] w-full sm:flex sm:flex-col sm:items-start sm:mt-1 lg:flex lg:items-center lg:h-[55px] lg:justify-start">
                  <p className="text-lg font-bold sm:mt-0 flex items-start justify-start  lg:mt-0 lg:mr-8 ">
                    Description:
                  </p>
                  <span className="text-gray-700 ml-2 sm:ml-1 pr-2 sm:text-left font-semibold lg:ml-0 ">
                    {product.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-[100vh] w-full sm:relative sm:top-[200px] flex flex-col items-center justify-center sm:mb-[250px]">
        <div className="h-[150px] sm:h-[120px] w-full flex sm:flex sm:items-center sm:justify-center items-center justify-center">
          <p className="text-4xl sm:text-[28px] font-semibold text-gray-800 relative sm:top-0 top-[50px]">
            Related Products
          </p>
        </div>
        <div className="w-full min-h-[100vh] flex sm:flex-wrap flex-wrap items-center sm:items-center  justify-center sm:justify-center sm:gap-[10px] gap-10">
          {relatedProducts
            .filter((p) => p.category === product.category)
            .slice(0, 4) // Exclude current product
            .map((product, index) => (
              <div key={index} className="h-[390px] rounded-3xl sm:w-[45%] sm:h-[43vh] w-[270px] flex items-center justify-start sm:justify-center">
                 <div className="h-auto w-[100%] sm:w-full md:w-full sm:h-full bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start shrink-0">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full h-full flex flex-col items-center justify-center">
                     <div className="h-[250px] w-[100%] sm:h-[32vh] sm:w-[100%] bg-black relative flex flex-col items-center justify-center rounded-3xl">
                          <span className="lg:hidden absolute top-2 left-1 sm:top-0 sm:right-2 flex items-center justify-center font-bold sm:w-[45px] sm:h-[40px] rounded-full">
                            <FaHeart className="z-[1000] md:hidden hover:text-red-600 transition duration-400 ease sm:text-[26px] text-[#f6f6f6]" />
                          </span>
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
                        <div className="h-[150px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[90%] sm:w-[100%] sm:pl-[10px] sm:h-[20px] pr-1 sm:text-balance leading-0 flex items-center justify-start">
                          <p className="text-[17px] sm:text-sm text-[#000] sm:leading-[15px] font-bold capitalize overflow-hidden">
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
                    <div className="h-full w-full sm:h-[25%] flex justify-end items-center relative bottom-[40px] sm:bottom-[49px]">
                      <FaHeart
                        className="sm:hidden relative right-[50px] sm:right-4 bottom-[5px] z-[1000] hover:text-red-600 transition duration-400 ease sm:text-[30px] text-[#000]"
                        size={30}
                      />
                      <FaCartArrowDown
                        onClick={() => addToCart(product)}
                        className="relative right-[30px] sm:right-[20px] bottom-[5px] sm:bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[32px] text-[30px] text-[#000]"
                      />
                    </div>
                  </div>
              </div>
            ))}
        </div>
      </section>
      <Footer />
      <Data onDataItem={handleItem} />
    </>
  );
};
export default ProductsRef;
