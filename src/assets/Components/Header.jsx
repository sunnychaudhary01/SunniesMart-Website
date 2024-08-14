import React, { useState } from "react";
import { IoExitOutline, IoPersonSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaSearch,
  FaBoxOpen,
  FaSignInAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = ({cart = [], removeItem, handDec, handInc, cartTotal, wishlist}) => {
  const [show, setShow] = useState([false, false, false, false]);
  const [cartVisible, setCartVisible] = useState(false);
  const [hide, setHide] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const handleMouseEnter = () => {
    setHide(true);
  };

  const handleMouseLeave = () => {
    setHide(false);
  };

  const toggleNav = () => {
    setHeaderVisible(!headerVisible);
  };

  const handleMenuColor = (index) => {
    setShow((menuColor) =>
      menuColor.map((clr, idx) => (idx === index ? !clr : false))
    );
  };

  const handleExitClick = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="flex px-[100px] md:w-full shadow-sm shadow-[#d7d1d1] z-[9999] justify-between items-center h-[90px] w-full">
      <div className="hidden sm:block md:block h-[30px] w-[30px] z-[998] absolute md:left-[10px] left-[0px] top-0">
        <RxHamburgerMenu
          onClick={toggleNav}
          className="hidden text-[23px] md:text-[26px] md:block sm:relative md:relative top-[34px]  left-[18px] sm:block" />
      </div>
      <div
        className={`z-[998] sm:block hidden md:block md:fixed sm:fixed left-[0px] top-0 border border-gray-200 right-0 p-2 w-[290px] md:w-[400px] h-screen shadow-2xl rounded-2xl bg-white transform transition-transform duration-1000 overflow-hidden ${
          headerVisible ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="cursor-pointer h-full w-full md:w-full relative top-[50px] left-[28px]">
          <Link onClick={toggleNav} to="/" className="sm:w-[20vw]">
            <h1 className="text-3xl md:text-4xl text-[#000] font-extrabold cursor-pointer">
              Sunnies
              <span className="text-3xl md:text-4xl text-[#639fff] font-extrabold">
                Mart
              </span>
            </h1>
          </Link>
          <span className="w-full">
            <IoExitOutline
              onClick={toggleNav}
              className="hidden text-[30px] md:text-[38px] md:block fixed top-[62px] left-[240px] md:left-[270px] sm:block"
            />
          </span>

          <div className="w-full h-full md:w-full z-[998] relative left-[0px] top-[50px] right-[37px] ">
            <ul className="flex flex-col items-start gap-12 text-[#391616] text-[21px] font-[500]">
              <Link onClick={toggleNav} to="/search">
                <li
                  onClick={() => handleMenuColor(0)}
                  className={
                    show[0]
                      ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                      : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                  }
                >
                  <FaSearch className="mr-[10px]" />
                  Search
                </li>
              </Link>
              <Link onClick={toggleNav} to="/products">
                <li
                  onClick={() => handleMenuColor(1)}
                  className={
                    show[1]
                      ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                      : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                  }
                >
                  <FaBoxOpen className="mr-[10px]" />
                  Products
                </li>
              </Link>
              <Link onClick={toggleNav} to="/signin">
                <li
                  onClick={() => handleMenuColor(2)}
                  className={
                    show[2]
                      ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                      : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                  }
                >
                  <FaSignInAlt className="mr-[10px]" />
                  Sign In
                </li>
              </Link>
              <li onClick={() => handleMenuColor(3)}
                className={
                  show[3]
                    ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                    : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"}>
                <Link onClick={toggleNav} to="/cart">
                  <span
                    onClick={() => setCartVisible(!cartVisible)}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart className="mr-[10px]" />
                    Cart
                  </span>
                </Link>
              </li>
              <li
                onClick={() => handleMenuColor(4)}
                className={
                  show[3]
                    ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                    : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                }
              >
                <Link onClick={toggleNav} to="/wishlist">
                  <span
                    onClick={() => setCartVisible(!cartVisible)}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FaHeart className="mr-[10px]" />
                    Wishlist
                  </span>
                </Link>
              </li>
            </ul>
            <span className="w-full h-[150px] flex items-center justify-start">
              <div
                onClick={toggleNav}
                className="h-full w-[250px] flex justify-start items-center text-[#391616] gap-10"
              >
                <Link to="https://www.linkedin.com/in/shani-kannaujiya-592a59287">
                  <FaLinkedinIn
                    className="hover:text-blue-600 transition  delay-100 cursor-pointer"
                    size={25}
                  />
                </Link>
                <Link to="https://github.com/Sunnychaudhary01">
                  <FaGithub
                    className="hover:text-blue-600 transition  delay-100 cursor-pointer"
                    size={25}
                  />
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
      <Link to="/" className="sm:w-[0%] md:w-[0]">
        <div className="sm:relative z-[997] sm:right-[52px] md:relative md:right-[40px] sm:flex md:flex md:items-center md:justify-between sm:justify-between cursor-pointer h-full sm:w-[78vw] md:w-[85vw] w-full">
          <h1 className="sm:text-[24px] md:text-[31px]  text-4xl text-[#000] font-extrabold cursor-pointer">
            Sunnies
            <span className="sm:text-[24px] md:text-[31px] text-4xl text-[#639fff] font-extrabold">
              Mart
            </span>
          </h1>
          <div className="sm:flex w-[90px] h-[35px] hidden md:flex md:items-center  md:relative sm:relative sm:top-[2px] sm:left-[15px] sm:w-[75px] md:w-[100px]">
            <ul className=" md:w-full text-gray-800 flex justify-start md:justify-around items-center md:gap-2 ">
              <Link to="/search">
                <li>
                  {" "}
                  <FaSearch  className="text-[20px] md:text-[23px] mr-[8px]" />
                </li>
              </Link>
              <Link to="/signin">
                <li>
                  <IoPersonSharp  className="text-[20px] md:text-[23px] mr-[8px]" />
                </li>
              </Link>
              <Link to="/cart">
                <li>
                  <span className="w-[21px]  h-[20px] text-[18px] sm:text-[16px] font-semibold absolute left-[75px] sm:left-[60px] md:left-[75px] flex items-center justify-end md:bottom-[21px] bottom-[22px] rounded-full text-gray-700">
                    {cart.length > 0 ? cart.length : null}
                  </span>
                  <FaShoppingCart className="text-[20px] md:text-[23px] mr-[10px]" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </Link>
      <header>
        <ul className="sm:hidden md:hidden flex items-center gap-20  text-[#391616] text-[22px] font-[500]">
          <Link to="/search">
            <li
              onClick={() => handleMenuColor(0)}
              className={
                show[0]
                  ? "text-[#fff] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                  : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"}>
              Search
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={() => handleMenuColor(1)}
              className={
                show[1]
                  ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                  : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
              }>
              Products
            </li>
          </Link>
          <li
            onClick={() => handleMenuColor(2)}
            className={
              show[2]
                ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex flex-col items-center gap-2"
                : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex flex-col items-center gap-2"
            }
          >
            <IoPersonSharp
              size={24}
              onMouseEnter={handleMouseEnter}
              className="mr-[0px]"
            />
          </li>
          {hide && (
            <div
              onMouseLeave={handleMouseLeave}
              className="h-[80px] transition delay-500 w-[150px] border absolute top-[60px] right-[210px] z-10 bg-white shadow-md "
            >
              <ul className="w-full h-full text-[16px] text-gray-700 font-medium flex flex-col items-start justify-center gap-2 px-5">
                <Link to="/signin">
                  {" "}
                  <li
                    className={
                      show[2]
                        ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex flex-col items-center gap-2"
                        : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex flex-col items-center gap-2"
                    }
                  >
                    Sign in{" "}
                  </li>
                </Link>
                <Link to="/wishlist">
                  {" "}
                  <li
                    className={
                      show[2]
                        ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                        : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                    }
                  >
                    Wishlist <span className="font-extrabold" >{wishlist.length}</span>{" "}
                  </li>
                </Link>
              </ul>
            </div>
          )}
          <li onClick={() => handleMenuColor(3)}
            className={
              show[3]
                ? "text-[#3da1c3] hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"
                : "hover:text-[#3da1c3] hover:cursor-pointer tracking-widest flex items-center gap-2"}>
            <span 
            onClick={() => setCartVisible(!cartVisible)}
            className="w-full flex items-center justify-center gap-2">
            <div className="relative">
            <RiShoppingCartLine size={24} />
             <span className="w-[30px] h-[30px] text-[19px] absolute left-6 bottom-2 text-gray-500">
                {cart.length > 0 ? cart.length : null}
             </span>
                <div className={`transition-transform duration-500 ease-in-out z-[9999] fixed top-0 border border-gray-200 right-0 p-2 w-[550px] h-full bg-white shadow-2xl rounded-2xl ${
                  cartVisible ? "translate-x-0" : "translate-x-full" }`}
                  onClick={(e) => e.stopPropagation()}>
                  <div className="h-[120px] w-full flex flex-col items-start justify-start gap-5 relative top-[15px]">
                    <span className="flex justify-between items-center pl-[30px] pr-[20px] h-full w-full text-2xl text-black">
                      Cart
                      <p className="h-full w-full flex items-center justify-end pr-[10px]">
                        <IoExitOutline onClick={handleExitClick} size={28} />
                      </p>
                    </span>
                    <div className="overflow-y-scroll min-h-[58vh] w-full relative left-8 text-[22px] font-normal top-0 text-black">
                      {cart.length === 0 ? ("Cart is empty.") : (
                        <div className="w-full min-h-[55vh] border-t overflow-y-scroll">
                          {cart.map((cartNew, id) => (
                            <div
                              key={id}
                              className="h-[120px] pl-[10px]  border-b pr-[10px] w-full flex items-center justify-around text-gray-900"
                            >
                              <div className="relative">
                                <img
                                  className="h-[100px] w-[110px] object-fill rounded-lg bg-black"
                                  src={cartNew.thumbnail}
                                  alt={cartNew.title}
                                />
                                <button
                                  onClick={() => removeItem(id)}
                                  className=" pb-[5px] absolute top-[-1px] left-[-2px] bg-white border text-black rounded-full z-[999] h-[22px] w-[22px] flex items-center justify-center shadow-lg"
                                >
                                  x
                                </button>
                              </div>
                              <span className="w-[200px] flex items-center justify-center">
                                <h2 className="text-[15px] w-[70px] text-center font-semibold">
                                  {cartNew.title}
                                </h2>
                              </span>
                              <div className=" flex justify-center border items-center pr-[0px]">
                                <button
                                  onClick={() => handDec(cartNew.id)}
                                  className="h-[27px] flex items-center justify-center w-[20px] border-[1px] border-[#ccc] text-[16px] font-bold text-black"
                                >
                                  -
                                </button>
                                <span className="h-[27px] flex items-center justify-center w-[20px] border-[1px] border-[#ccc] text-[16px] text-black text-center">
                                  {cartNew.quantity}
                                </span>
                                <button
                                  onClick={() => handInc(cartNew.id)}
                                  className="h-[27px] flex items-center justify-center w-[20px] border-[1px] border-[#ccc] text-[16px] font-bold text-black"
                                >
                                  +
                                </button>
                              </div>
                              <p className="text-[16px] w-[140px] pl-[15px] font-semibold">
                                Rs{" "}
                                {(cartNew.price * cartNew.quantity)
                                  .toString()
                                  .slice(0, 5)
                                  .replace(".", ",") + ".00"}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-full relative top-[0px] flex flex-col items-center justify-end border-t border-gray-200">
                      <div className=" w-full h-[50px] flex justify-between px-3 mt-4  border-b">
                        <p className="text-[19px] text-black font-bold pl-[30px] ">
                          Subtotal:{" "}
                        </p>
                        <span className="text-[19px] text-blue-700 pr-[10px]">
                          Rs{" "}
                          {cartTotal.toString().slice(0, 6).replace(".", ",") +
                            ".00"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center gap-8 w-[390px] mt-8">
                        <Link to="/cart">
                          <button className="bg-blue-500 text-white font-normal tracking-normal text-[19px] w-[190px] h-[50px] rounded hover:bg-black transition-colors">
                            View Cart
                          </button>
                        </Link>
                        <Link to="/checkout">
                          <button className="bg-blue-500 text-white font-normal tracking-normal text-[19px] w-[190px] h-[50px] rounded hover:bg-black transition-colors">
                            Check out
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </li>
        </ul>
      </header>
    </div>
  );
};
