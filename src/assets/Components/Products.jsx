import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { Link, json } from "react-router-dom";
import Footer from "./Footer";
import Preloader from "../../Preloader";

const Products = ({ addToCart, wishlistFunc }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("non");

  useEffect(() => {
    // Fetch all products initially
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Fetching error data:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Filter products by selected category
      axios
        .get(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((response) => {
          console.log(`Products for ${selectedCategory}:`);
          setFilteredProducts(response.data.products);
        })
        .catch((error) => console.error("Fetching error data:", error));
    } else {
      // Show all products if no category is selected
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const handleCat = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
  };

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="">
          <div className="w-full h-[60vh] sm:h-[75vh] sm:w-full ">
            <div className="h-[300px] w-[1200px] sm:h-full sm:w-full mt-[70px] sm:mt-0 rounded-xl mx-auto bg-gray-200 flex sm:flex-col items-center sm:justify-center sm:items-center justify-around">
              <div className="h-full w-full flex flex-col items-start  sm:justify-center justify-center sm:pl-0 pl-[40px]">
                <h2 className="h-[50px] sm:h-[50px]  w-[300px] sm:w-full text-5xl sm:text-[32px] font-semibold relative text-gray-700 bottom-[30px] sm:flex sm:justify-center sm:items-center ">
                  Our Products
                </h2>
                <p className="h-[80px] w-[750px] sm:w-full sm:p-2 sm:text-center text-gray-700 text-[19px] sm:text-[18px] ">
                  Welcome to our collection, where excitement meets discovery.
                  We're committed to keeping you at the forefront of fashion,
                  technology, and lifestyle trends.
                </p>
              </div>
              <div className="w-[250px] h-[250px] sm:h-[200px] sm:w-[200px] sm:mb-[50px] flex items-center sm:justify-center sm:items-center justify-center rounded-xl sm:mr-0 mr-[40px] bg-[#ebbdbd] border border-[#f5caca]">
                <div className="w-[250px] h-[250px] sm:h-[200px] sm:w-[200px] rounded-xl flex flex-wrap items-center justify-center">
                  <img
                    className="h-[120px] w-[120px] sm:h-[80px] sm:w-[80px] "
                    src="./thumbnail (1).png"
                    alt=""
                  />
                  <img
                    className="h-[120px] w-[120px] sm:h-[80px] sm:w-[80px]"
                    src="./thumbnail (3).png"
                    alt=""
                  />
                  <img
                    className="h-[120px] w-[120px] sm:h-[80px] sm:w-[80px]"
                    src="./thumbnail (2).png"
                    alt=""
                  />
                  <img
                    className="h-[100px] w-[100px] sm:h-[70px] sm:w-[70px]"
                    src="./thumbnail.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100px] sm:h-[200px] w-full flex justify-center items-end">
            <p className="text-4xl sm:text-[29px] font-semibold">
              Our products
            </p>
          </div>
          <section className="min-h-[100vh] sm:w-full w-[1200px] sm:mb-[350px] mb-[500px] mx-auto">
            <div className="w-full sm:h-[480px] sm:w-full min-h-[100vh] sm:min-h-[100vh] relative top-[70px] flex flex-col items-start justify-start">
              <div className="w-full sm:w-full sm:h-[480px] h-[150px] p-[20px] z-[999] bg-gray-200 rounded-lg flex sm:flex-col sm:items-start  sm:gap-3 items-center justify-start">
                <div className="w-[200px] sm:w-[170px] h-[50px] sm:h-[42px] rounded-lg flex sm:flex-col items-center justify-around border border-gray-400">
                  <select
                    className="relative rounded-lg flex items-center justify-around bg-transparent outline-none"
                    onChange={(e) => {
                      handleCat(e.target.value);
                    }}>
                    <option value="">All Products</option>
                    {categories.map((category, index) => {
                      return (
                        <option
                          key={index}
                          className="text-[18px] h-[50px] w-full font-light -tracking-widest outline-none"
                          value={category.name}
                        >
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="w-[200px] sm:w-[170px] h-[50px] sm:h-[40px] relative left-[30px] sm:left-0 rounded-lg flex items-center justify-around border border-gray-400">
                  <select
                    className="relative rounded-lg flex items-center justify-around bg-transparent outline-none"
                    id="sortOrder"
                    onChange={(e) => handleSortOrder(e.target.value)}
                  >
                    <option value="non">Sort item</option>
                    <option value="asc">Price low to high</option>
                    <option value="desc">Price high to low</option>
                  </select>
                </div>
                <p className="w-[270px] text-[21px] sm:text-[20px] sm:text-gray-700 relative left-[450px] sm:left-0 flex justify-between items-center font-semibold">
                  Result - Showing:{" "}
                  <span className="font-bold text-black ">
                    {+filteredProducts.length} Items
                  </span>
                </p>
              </div>
              <div className="w-full min-h-[100vh] sm:min-h-[100vh] sm:overflow-y-scroll sm:w-full flex flex-wrap items-center justify-start gap-10 sm:gap-3 sm:pb-[50px] pt-[70px] sm:pt-[40px] sm:items-center sm:justify-center ">
                {filteredProducts
                  .sort((a, b) => {
                    if (sortOrder === "asc") {
                      return a.price - b.price;
                    } else if (sortOrder === "desc") {
                      return b.price - a.price;
                    } else {
                      return 0; // No sorting
                    }
                  })
                  .slice(0, 30)
                  .map((product, index) => (
                    <div
                      key={index}
                      className="h-[390px] rounded-3xl w-[270px] sm:w-[45%] sm:h-[43vh] flex items-center justify-center">
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
                        <div className="h-[150px] relative top-0 mb-0 sm:top-2 left-1 sm:left-0 text-left w-[90%] sm:w-[100%] sm:pl-[10px] sm:h-[20px] pr-1 sm:text-balance leading-0 flex items-center justify-start">
                          <p className="text-[17px] sm:text-sm text-[#000] sm:pt-1 sm:leading-[16px] font-bold capitalize overflow-hidden">
                            {product.title}
                          </p>
                        </div>
                        <div className="h-full sm:h-[50px] w-full sm:pl-[10px] flex flex-col items-end justify-around sm:justify-around sm:items-center sm:pt-2">
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
                    <div className="h-full w-full sm:h-[25%] flex justify-end items-center relative bottom-[40px] sm:bottom-[45px]">
                      <FaHeart onClick={()=>wishlistFunc(product)}
                        className="relative right-[50px] sm:right-[15px] bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[28px] text-[#000]"
                        size={30}
                      />
                      <FaCartArrowDown
                        onClick={() => addToCart(product)}
                        className="relative right-[30px] sm:right-[10px] bottom-[5px] sm:bottom-[5px] z-[1000] hover:text-[#866b6b] transition duration-400 ease sm:text-[28px] text-[30px] text-[#000]"
                      />
                    </div>
                  </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
};

export default Products;
