import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";
import Data from "./Data";





const ProductsRef = ({ onDataItem, cart, addToCart, handDec, handInc, wishlistFunc }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {hash} = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }
    return () => {
      window.scrollTo(0, 0); // Reset scroll to top when component unmounts
    };
  }, [hash]);

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
    if (product.quantity > 0) {
      handInc(product.id);
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity + 1,
      }));
    }
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
        <div className="h-full w-full sm:w-full md:h-full md:w-full lg:h-full lg:w-full bg-zinc-50 flex sm:flex-col md:flex-col lg:flex-col  items-center justify-around">
          <div className="h-full sm:w-full md:w-full lg:w-full w-[600px] xl:w-[500px] flex flex-col sm:items-start md:items-start md:pl-[60px] items-start justify-center sm:pl-[20px] pl-[40px] xl:pl-[20px]">
            <div id="section1" className="w-[400px] h-[400px] sm:w-[250px] sm:h-[250px] md:w-[295px] md:h-[300px] lg:w-[350px] lg:h-[360px] md:mt-[50px] lg:mt-[100px] sm:mt-[50px] flex items-center sm:justify-center justify-center rounded-xl mr-[40px] bg-[#000] border border-[#f5caca]">
              <img className="h-[400px] w-[400px] sm:w-[250px] sm:h-[250px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] rounded-xl"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>
          </div>
          <div className="w-full h-full sm:w-full sm:h-full lg:h-full xl:w-full ">
            <div className="h-[100vh] w-full sm:w-full xl:w-full  flex flex-col items-start justify-start lg:pt-5 pt-[120px] xl:pt-[60px] md:pt-[30px] sm:pt-[30px] sm:pl-[20px] pl-[60px] xl:pl-[20px] lg:pl-[40px]">
              <h2 className="text-[43px] xl:text-[40px] sm:text-[30px] text-gray-800 font-bold tracking-wide">
                {product.title}
              </h2>
              <div className="h-[50px] w-[600px] sm:w-[100%] sm:h-[100px] flex sm:flex-wrap items-start justify-start sm:items-center sm:justify-start xl:w-full xl:justify-start ">
                <p className="h-[50px] w-[200px] sm:w-[135px] sm:text-[22px] text-[34px] xl:text-[32px]  pl-[0px] text-gray-700 flex relative top-[10px] font-thin line-through capitalize">
                  Rs.{" "}
                  {product.price.toString().slice(0, 6).replace(".", ",") +
                    ".00"}
                </p>
                <p className="h-[50px] w-[225px] sm:w-[140px] xl:w-[175px] sm:text-[22px] xl:text-[32px] text-[40px]  text-gray-600 flex relative top-[15px] left-[15px] xl:left-[5px] font-semibold leading-none capitalize">
                  Rs.{" "}
                  {(
                    product.price -
                    (product.discountPercentage / 100) * product.price
                  )
                    .toString()
                    .slice(0, 4)
                    .replace(".", ",") + ".00"}
                </p>
                <span className="relative top-[25px] left-[35px] sm:top-[0px] sm:left-[0px] xl:left-[0px] flex items-center justify-center sm:items-center sm:justify-center xl:items-center bg-[#e6dcdc] text-gray-600 font-bold sm:w-[100px] w-[120px] h-[30px] sm:h-[40px] rounded-md">
                  {" "}
                  Save -{Math.round(product.discountPercentage) + "%"}
                </span>
              </div>
              <div className="h-[100px] w-[510px] sm:w-full pt-[40px] xl:w-[95%] sm:pt-[20px] sm:mb-[0px] mb-[15px] flex sm:flex-col items-start justify-start sm:gap-4 xl:gap-2 ">
                <div
                  onClick={(e) => e.preventDefault}
                  className="w-[180px] sm:w-full xl:w-full flex items-center xl:items-center xl:justify-center"
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
                <div className="w-[330px] sm:w-full sm:h-[60px] flex sm:justify-start sm:gap-2 xl:gap-2 justify-between">
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
              <div className="w-full h-full xl:w-full xl:h-full sm:flex sm:flex-col sm:mt-12 md:flex md:flex-col md:mt-2 lg:flex lg:flex-col lg:mt-12 xl:mt-5 xl:flex xl:flex-col xl:gap-3 lg:gap-2">
                <div className="sm:h-[60px] w-full flex-col xl:w-full m-0 sm:flex sm:flex-col xl:flex-col sm:items-start sm:mt-1 md:h-[60px] md:flex md:flex-col md:items-start md:mt-1 flex items-start lg:h-[55px] lg:flex lg:flex-col lg:items-start ">
                  <p className="text-[22px] md:text-[24px] lg:text-[25px] xl:text-[24px] md:font-semibold font-bold sm:mt-0 flex items-start justify-between md:mt-0 lg:mt-0 lg:mr-8 ">
                    Availability:
                  </p>
                  <span className="text-gray-700 ml-0 sm:ml-1 text-[18px] md:ml-1 sm:text-left md:text-left md:font-normal font-normal lg:ml-0 md:text-[20px] xl:text-[22px] lg:text-[21px] lg:font-normal xl:font-normal ">
                    {product.stock} left in stock
                  </span>
                </div>
                <div className="sm:h-[60px] w-full m-0 sm:flex sm:flex-col sm:items-start sm:mt-1 md:h-[60px] md:flex md:flex-col md:items-start md:mt-1 lg:flex lg:flex-col lg:items-start  lg:h-[55px] lg:justify-start">
                  <p className="text-[22px] md:text-[24px] xl:text-[24px] lg:text-[24px]
                     md:font-semibold font-bold sm:mt-0 flex items-start justify-start md:mt-0 lg:mt-0 lg:mr-16 ">
                    Ratings:
                  </p>
                  <span className="text-gray-700 ml-0 text-[18px] sm:ml-1 md:ml-1 sm:text-left md:text-left md:font-normal font-normal lg:ml-0 md:text-[20px] xl:text-[24px] lg:text-[21px] lg:font-normal xl:font-normal">
                    {product.rating} stars
                  </span>
                </div>
                <div className="sm:h-[60px] w-full sm:flex sm:flex-col sm:items-start sm:mt-1 md:h-[60px] md:flex md:flex-col md:items-start md:mt-1 lg:flex lg:flex-col lg:items-start lg:h-[55px] lg:justify-start">
                  <p className="text-[22px] md:text-[24px] md:font-semibold font-bold lg:text-[24px] sm:mt-0 flex items-start justify-start md:mt-0 lg:mt-0 lg:mr-14 xl:text-[24px]">
                    Delivery:
                  </p>
                  <span className="text-gray-700 ml-0 text-[18px] sm:ml-1 md:ml-1 sm:text-left md:text-left md:font-normal font-normal lg:ml-0 md:text-[20px] xl:text-[24px] lg:text-[21px] lg:font-normal xl:font-normal ">
                    {product.shippingInformation}
                  </span>
                </div>
                <div className="sm:h-[60px] w-full sm:flex sm:flex-col sm:items-start sm:mt-1 md:h-[60px] md:flex md:flex-col md:items-start md:mt-1 lg:flex lg:flex-col lg:items-start  lg:h-[55px] lg:justify-start">
                  <p className="text-[22px] md:text-[24px] md:font-semibold font-bold sm:mt-0 flex items-start justify-start md:mt-0 lg:mt-0 lg:mr-4 xl:text-[24px] lg:text-[24px]">
                    Return Policy:
                  </p>
                  <span className="text-gray-700 ml-0 text-[18px] sm:ml-1 md:ml-1 sm:text-left md:text-left md:font-normal font-normal lg:ml-0 md:text-[20px] xl:text-[24px] lg:text-[21px]  lg:font-normal xl:font-normal ">
                    {product.returnPolicy}
                  </span>
                </div>
                <div className="sm:h-[60px] w-full sm:flex sm:flex-col sm:items-start sm:mt-1 md:h-[60px] md:flex md:flex-col md:items-start md:mt-1 lg:flex lg:flex-col lg:items-start lg:h-[55px] lg:justify-start">
                  <p className="text-[22px] md:text-[24px] md:font-semibold font-bold sm:mt-0 flex items-start justify-start md:mt-0 lg:mt-0 lg:mr-8 xl:text-[24px] lg">
                    Description:
                  </p>
                  <span className=" lg:w-[94%] text-gray-700 ml-0 text-[18px] sm:ml-1 md:ml-1 pr-2 sm:text-left md:text-left md:font-normal font-normal lg:ml-0 md:text-[20px] md:pr-[10px] xl:font-normal lg:text-[21px] lg:font-normal xl:text-[22px] leading-none">
                    {product.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-[100vh] w-full md:w-full md:min-h-[1000px] lg:min-h-full sm:relative sm:top-[200px] md:relative md:top-[500px] relative top-[160px] mb-[250px] lg:relative lg:top-[550px] xl:relative xl:top-[200px] flex flex-col items-center justify-center md:justify-start sm:mb-[250px] md:mb-[500px] lg:mb-[650px] xl:mb-[450px]">
        <div className="h-[150px] sm:h-[120px] w-full flex sm:flex sm:items-center sm:justify-center items-center justify-center">
          <p className="text-4xl sm:text-[28px] font-semibold text-gray-800 relative sm:top-0 md:top-0 lg:top-0 top-[50px]">
            Related Products
          </p>
        </div>
        <div className="w-full min-h-[100vh] sm:min-h-[600px] xl:h-full flex sm:flex-wrap flex-wrap items-center sm:items-center justify-center sm:justify-center sm:gap-[10px] gap-10 md:gap-5 xl:gap-3 xl:relative xl:top-[50px]">
          {relatedProducts
            .filter((p) => p.category === product.category)
            .slice(0, 4) // Exclude current product
            .map((product, index) => (
              <div key={index}
                    className="h-[85%] w-[265px] sm:w-[46%] sm:h-[265px] md:w-[40%] lg:w-[32%] lg:h-[375px] md:h-[365px] rounded-3xl flex flex-col items-center sm:flex-col md:flex-col md:items-center xl:w-[33%] xl:h-[375px] md:justify-center md:mb-[10px] sm:mb-[10px] xl:mb-[20px] sm:ml-[2px]">
                  <div className="h-auto w-[265px] sm:w-full md:w-[270px] md:h-[350px] lg:w-[270px] lg:h-[370px] xl:w-[265px] xl:h-[370px] sm:h-full bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start shrink-0">
                    <Link to={`/products/${product.id}`} className="w-full h-full flex flex-col items-center justify-center sm:z-[998] ">
                     <div className="h-[250px] w-[100%] sm:h-[32vh] sm:w-[100%] md:h-[200px] lg:h-[230px] lg:w-[265px] xl:h-[230px] xl:w-[265px]  bg-black relative flex flex-col items-center justify-center rounded-3xl">
                          <span
                            className="absolute top-2 right-5 sm:right-2 flex items-center justify-center bg-[#f6f6f6] text-black font-bold w-[80px] h-[25px] sm:w-[34%] sm:h-[16%]
                              sm:text-[13px] rounded-full">
                            {product.discountPercentage + "%"}
                          </span>
                          <img
                            src={product.thumbnail}
                            className="h-[250px] w-[250px] sm:h-[160px] sm:w-[150px] md:h-[180px] md:w-[180px] lg:w-[180px] lg:h-[180px] xl:w-[180px] xl:h-[180px]  object-cover shadow-md rounded-3xl"
                            alt=""
                          />
                        </div>
                      <div className="h-[120px] sm:h-[51%] w-full sm:w-[90%] flex flex-col items-start justify-around sm:justify-around sm:rounded-3xl pl-7 sm:pl-0">
                        <div className="h-[150px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[90%] sm:w-[100%] sm:pl-[5px] sm:h-[20px] pr-1 sm:text-balance leading-0 flex items-center justify-start">
                          <p className="text-[17px] sm:text-sm md:text-[20px] sm:leading-[16px] text-[#000] font-bold sm:font-normal capitalize overflow-hidden">
                            {product.title}
                          </p>
                        </div>
                        <div className="h-full sm:h-[50px] w-full sm:pl-[5px] flex flex-col items-end justify-around sm:justify-around sm:items-center">
                          <p className="text-[19px] flex flex-col sm:text-[13px] md:text-[20px] w-full relative left-1 sm:left-0 font-bold leading-none capitalize text-[#000]">
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
                      <FaHeart onClick={()=>wishlistFunc(product)}
                        className="relative right-[50px] sm:right-[24px] md:right-[50px] md:text-[30px] bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"/>
                      <FaCartArrowDown
                        onClick={() => addToCart(product)}
                        className="relative right-[30px] sm:right-[17px] md:right-[35px] md:text-[30px] bottom-[5px] sm:bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"
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
