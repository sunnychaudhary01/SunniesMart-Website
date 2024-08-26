import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import Footer from "./assets/Components/Footer";

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [getItem, setGetItem] = useState([]);

  useEffect(() => {
    if (searchItem) {
      fetch(`https://dummyjson.com/products/search?q=${searchItem}`)
        .then((res) => res.json())
        .then((data) => {
          setGetItem(data.products);
        })
        .catch((error) => console.error("Error fetching product data:", error));
    } else {
      setGetItem([]);
    }
  }, [searchItem]);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return (
    <>
      <div className="min-h-screen w-full mb-[100px] ">
        {loading && <Preloader />}
        <div className="w-full h-[100px] flex items-center justify-center px-4">
          <div className="w-full max-w-xl h-[50px] sm:pr-[10px] border-[1px] rounded-sm border-[#ccc] flex items-center justify-start">
            <input
              onChange={handleSearch}
              className="w-full h-full outline-none p-5 sm:rounded-lg"
              type="text"
              placeholder="Search products...."
            />
            <CiSearch className="text-gray-500 " size={29} />
          </div>
        </div>
        <div className="w-full sm:w-full max-w-6xl mx-auto flex flex-wrap gap-4 sm:gap-[5px] py-10 sm:py-1 items-center justify-around sm:px-0 px-4 ">
          {getItem.length > 0 ? (
            getItem.slice(0, 16).map((product, index) => (
              <div key={index}
                    className="h-[85%] w-[265px] sm:w-[150px] sm:h-[265px] md:w-[35%] md:h-[345px] rounded-3xl flex flex-col items-center sm:flex-col md:flex-col md:items-center md:justify-center md:mb-[10px] mb-[10px] sm:mb-[30px]">
                  <div className="h-auto w-[100%] sm:w-[170px] md:w-full md:h-full sm:h-full bg-[#e4cfcf] shadow-xl rounded-3xl flex flex-col items-start justify-start shrink-0 sm:ml-0">
                    <Link to={`/products/${product.id}`} className="w-full h-full flex flex-col items-center justify-center sm:z-[998]">
                     <div className="h-[250px] w-[100%] sm:h-[32vh] sm:w-[100%] md:h-[200px] bg-black relative flex flex-col items-center justify-center rounded-3xl">
                          <span
                            className="absolute top-2 right-5 sm:right-2 flex items-center justify-center bg-[#f6f6f6] text-black font-bold w-[80px] h-[25px] sm:w-[34%] sm:h-[16%]
                              sm:text-[13px] rounded-full">
                            {product.discountPercentage + "%"}
                          </span>
                          <img
                            src={product.thumbnail}
                            className="h-[250px] w-[250px] sm:h-[70%] sm:w-[60%] md:h-[180px] md:w-[180px] object-cover shadow-md rounded-3xl"
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
                          <p className="text-[19px] flex flex-col sm:text-[13px] w-full relative left-1 sm:left-0 font-bold leading-none capitalize  text-[#000]">
                            Rs{" "}
                            {(product.price -
                              (product.discountPercentage / 100) *
                                product.price)
                              .toString()
                              .slice(0, 4)
                              .replace(".", ",") + ".00"}
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
                    <div className="h-full w-full sm:h-[25%] flex justify-end items-center relative bottom-[40px] sm:bottom-[40px]">
                      <FaHeart onClick={()=>wishlistFunc(product)}
                        className="relative right-[50px] sm:right-[18px] bottom-[5px] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"/>
                      <FaCartArrowDown
                        onClick={() => addToCart(product)}
                        className="relative right-[30px] sm:right-[12px] bottom-[5px] sm:bottom-[5px] hover:text-[#866b6b] transition duration-400 ease sm:text-[25px] text-[30px] text-[#000]"
                      />
                    </div>
                  </div>
                  </div>
            ))
          ) : (
            <div className="h-[50vh] w-full flex items-center justify-center">
              <p className="text-2xl text-gray-500">Search products....!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
