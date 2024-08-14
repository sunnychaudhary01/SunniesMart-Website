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
      <div className="w-full h-full mb-[200px] sm:mb-[50px] ">
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
                    <span className="w-[300px] flex items-center justify-center mt-2 sm:mt-0">
                      <h2 className="text-[17px] w-full sm:w-[190px] text-center font-semibold">
                        {cartNew.title}
                      </h2>
                    </span>
                    <p className="text-[17px] font-semibold mt-2 sm:mt-0">
                      Rs {cartNew.price}
                    </p>
                    <div className="flex mt-2 sm:mt-0">
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
                    <p className="text-[17px] font-semibold mt-2 sm:mt-0">
                      Rs {(cartNew.price * cartNew.quantity).toString().slice(0, 6).replace('.', ',') + '.00'}
                    </p>
                    <button
                      onClick={() => removeItem(id)}
                      className="h-[30px] w-[100px] text-2xl sm:text-[18px] text-red-600 font-semibold pb-[11px] flex justify-center items-center  sm:mt-0"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>
              <div className="w-full sm:w-full flex sm:justify-center sm:items-start sm:gap-1 items-center gap-4 mt-8 ">
                <Link to="/product">
                  <button className="w-[250px] sm:w-[150px] h-[50px] text-white font-bold text-[17px] sm:text-[15px] rounded-md hover:bg-black transition duration-300 ease-in-out bg-blue-500">
                    Continue shopping
                  </button>
                </Link>
                <button
                  onClick={emptyCart}
                  className="w-[250px] sm:w-[150px] h-[50px] text-white font-bold text-[17px] sm:text-[15px] rounded-md hover:bg-black transition duration-300 ease-in-out bg-blue-500"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="h-[350px] w-full max-w-[1200px] relative top-[20px] flex justify-end sm:justify-center items-start mx-auto p-2 sm:p-0">
          {cart.length === 0 ? (
            " "
          ) : (
            <div className="h-[200px] w-[500px] sm:w-[300px] sm:flex sm:flex-col sm:items-start">
              <div>
                <p className="text-[27px] font-semibold pt-[10px] pb-[10px] sm:text-[25px] ">
                  Cart Totals
                </p>
              </div>
              <div className="w-full h-[120px] flex flex-col">
                <div className="w-full h-full flex">
                  <p className="w-full h-[60px] text-[18px] font-semibold border flex items-center justify-start pl-[15px]">
                    Subtotal
                  </p>
                  <p className="w-full h-[60px] text-[18px]  border flex items-center justify-start pl-[15px]">
                    Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
                  </p>
                </div>
                <div className="w-full h-full font-semibold flex">
                  <p className="w-full h-[60px] text-[18px]  bg-[#ccc] font-semibold border flex items-center justify-start pl-[15px]">
                    Total
                  </p>
                  <p className="w-full h-[60px] text-[18px] sm:text-[] bg-[#ccc] border flex items-center justify-start pl-[15px]">
                    Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
                  </p>
                </div>
              </div>
              <Link to="/checkout">
                <div className="h-[100px] w-full sm:w-full flex items-start justify-center mt-4">
                  <button className="w-full sm:w-[300px] h-[50px] text-white font-bold text-[17px] rounded-md hover:bg-black transition duration-300 ease-in-out bg-blue-500">
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
