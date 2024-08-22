import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Footer from "./assets/Components/Footer";

const Cart = ({ cart, removeItem, emptyCart, handDec, handInc, cartTotal }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className="w-full h-full mb-[200px] lg:mb-[100px] sm:mb-[50px] ">
        <div className="w-full h-full">
          <div className="h-[100px] w-full flex items-center justify-center bg-[#e9e0e0]">
            <h2 className="text-4xl sm:text-[25px] font-semibold">Your Shopping Cart</h2>
          </div>
          {cart.length === 0 ? (
            <div className="h-[80px] relative top-[180px] w-full flex items-center justify-center text-4xl sm:text-[24px] font-normal p-[40px]">
              <p className="text-gray-800">Cart is empty.</p>
            </div>
          ) : (
            <div className="h-full w-full max-w-[1200px] mx-auto mt-[50px] p-2 sm:p-5">
              <div className="h-full w-full flex flex-col items-center justify-center gap-8">
                {cart.map((cartNew, id) => (
                  <div
                    key={id}
                    className="h-auto sm:h-[350px] sm:flex sm:flex-col w-full flex items-center justify-around text-gray-900 border border-gray-300 p-2 sm:p-0"
                  >
                    <img
                      className="h-[140px] w-[140px] sm:h-[100px] sm:w-[100px] rounded-xl border bg-black "
                      src={cartNew.thumbnail}
                      alt={cartNew.title}
                    />
                    <span className="w-[300px] md:w-[140px] lg:w-[180px] flex items-center justify-center mt-2 sm:mt-0">
                      <h2 className="text-[17px] md:text-[20px] w-full sm:w-[190px] text-center sm:font-bold md:font-normal font-semibold md:text-left">
                        {cartNew.title}
                      </h2>
                    </span>
                    <p className="text-[17px] md:text-[20px] md:mt-0 md:font-normal font-semibold mt-2 sm:mt-0">
                      Rs {cartNew.price}
                    </p>
                    <div className="flex mt-2 sm:mt-0 md:mt-0">
                      <button onClick={() => handDec(cartNew.id)} className="h-[60px] w-[45px] sm:h-[40px] sm:w-[30px] border-[1px] border-[#ccc] text-xl font-bold text-black">
                        -
                      </button>
                      <div className="h-[60px] w-[45px] sm:h-[40px] sm:w-[30px] border-[1px] flex items-center justify-center border-[#ccc] text-xl font-bold text-black">
                        {cartNew.quantity}
                      </div>
                      <button onClick={() => handInc(cartNew.id)} className="h-[60px] w-[45px] sm:h-[40px] sm:w-[30px] border-[1px] border-[#ccc] text-xl font-bold text-black">
                        +
                      </button>
                    </div>
                    <p className="text-[17px] font-semibold mt-2 md:mt-0 sm:mt-0 md:text-[20px] md:text-center md:w-[120px] md:font-normal ">
                      Rs {(cartNew.price * cartNew.quantity).toString().slice(0, 6).replace('.', ',') + '.00'}
                    </p>
                    <button
                      onClick={() => removeItem(id)}
                      className="h-[30px] w-[100px] md:w-[50px] text-2xl sm:text-[18px] text-red-600 font-semibold pb-[11px] flex justify-center items-center  sm:mt-0"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
              <div className="w-full sm:w-full md:w-full flex sm:justify-center md:justify-center lg:justify-center sm:items-start sm:gap-1 items-center gap-4 mt-8 ">
                <Link to="/product">
                  <button className="w-[250px] md:w-[50vw] lg:w-[50vw] lg:h-[60px] sm:w-[150px] h-[50px] md:h-[60px] text-white font-bold text-[17px] md:text-[20px] sm:text-[15px] lg:text-[21px] rounded-md hover:bg-black transition duration-300 ease-in-out bg-blue-500">
                    Continue shopping
                  </button>
                </Link>
                <button
                  onClick={emptyCart}
                  className="w-[250px] sm:w-[150px] md:w-[50vw] lg:w-[50vw] lg:h-[60px] h-[50px] md:h-[60px] text-white font-bold text-[17px] md:text-[20px] sm:text-[15px] lg:text-[21px] rounded-md hover:bg-black transition duration-300 ease-in-out bg-blue-500"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="h-[350px] w-full md:w-full max-w-[1200px] relative top-[20px] md:top-[80px] flex justify-end sm:justify-center items-start mx-auto p-2 sm:p-0">
          {cart.length === 0 ? (
            " "
          ) : (
            <div className="h-[200px] w-[500px] sm:w-[300px] md:w-full lg:w-full lg:px-[40px] md:px-[10px] sm:flex sm:flex-col sm:items-start">
              <div>
                <p className="text-[27px] md:text-[30px] font-semibold pt-[10px] pb-[10px] sm:text-[25px] ">
                  Cart Totals
                </p>
              </div>
              <div className="w-full lg:justify-center h-[120px] flex flex-col">
                <div className="w-full h-full flex">
                  <p className="w-full h-[60px] text-[18px] md:text-[25px] font-semibold border flex items-center justify-start pl-[15px]">
                    Subtotal
                  </p>
                  <p className="w-full h-[60px] text-[18px] md:text-[24px]  border flex items-center justify-start pl-[15px]">
                    Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
                  </p>
                </div>
                <div className="w-full h-full font-semibold flex">
                  <p className="w-full h-[60px] text-[18px] md:text-[25px] bg-[#ccc] font-semibold border flex items-center justify-start pl-[15px]">
                    Total
                  </p>
                  <p className="w-full h-[60px] text-[18px] md:text-[24px] bg-[#ccc] border flex items-center justify-start pl-[15px]">
                    Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
                  </p>
                </div>
              </div>
              <Link to="/checkout#section2">
                <div className="h-[100px] w-full sm:w-full flex items-start lg:justify-center justify-center mt-4">
                  <button className="w-full sm:w-[300px] lg:w-[60vw] h-[50px] md:h-[60px] lg:h-[60px] text-white font-bold text-[17px] md:text-[22px] lg:text-[21px] rounded-md hover:bg-black transition duration-300 ease-in-out bg-blue-500">
                    Place Order
                  </button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
