import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./assets/Components/Footer";


const CheckOut = ({ cart, cartTotal }) => {
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

  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Default to credit card form

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <>
      <div id="section2" className="h-full w-full lg:min-h-full md:min-h-full lg:mb-[3px] lg:pb-[100px] lg:shadow-md xl:shadow-md flex items-start justify-center sm:w-full sm:h-full sm:flex-col md:shadow-md md:mb-[100px] md:pb-[100px] xl:pb-[150px] sm:mb-[150px] xl:mb-[0px]">
        <div className="h-screen lg:pt-[0px] w-full sm:h-full flex flex-col items-center justify-start pl-2 px-2 lg:pl-1 md:pl-1 sm:pl-2 overflow-y-scroll xl:px-4 xl:pl-2">
          <div className="h-auto sm:h-full w-full sm:mt-[0px] flex flex-col sm:justify-center sm:items-center  pt-10  sm:pt-5 xl:pt-3">
            <div className="w-full lg:pt-[0px] lg:h-[10px] flex items-end justify-between sm:px-[8px]">
              <span className="text-2xl">Contact</span>
              <span className="underline">Log in</span>
            </div>
            <div className="w-full flex items-start justify-center pt-3">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-12 border border-gray-300 rounded px-2"
              />
            </div>
          </div>
          <div className="h-auto w-full flex flex-col justify-start gap-3 mt-10">
            <form action="">
              <span className="font-semibold text-xl">Delivery</span>
              <div className="w-full h-12 border border-gray-300 text-gray-600 text-sm rounded mt-3 px-1">
                <select name="Country" className="w-full h-full px-1">
                  <option value="">Country/Region</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                </select>
              </div>
              <div className="w-full flex justify-between mt-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-[48%] h-12 px-2 border border-gray-300 placeholder-gray-600 placeholder-text-sm rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-[48%] h-12 px-2 border border-gray-300 placeholder-gray-600 placeholder-text-sm rounded"
                />
              </div>
              <div className="w-full h-12 text-gray-600 mt-3">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full h-full px-2 border border-gray-300 placeholder-gray-600 placeholder-text-sm rounded"
                />
              </div>
              <div className="w-full h-12 text-gray-600 mt-3">
                <input
                  type="text"
                  placeholder="Apartment, suite"
                  className="w-full h-full px-2 border border-gray-300 placeholder-gray-700 placeholder-text-sm rounded"
                />
              </div>
              <div className="w-full flex justify-between mt-4 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-[48%] h-12 px-2 border border-gray-300 placeholder-gray-600 placeholder-text-sm rounded"
                />
                <select className="w-[48%] h-12 px-2 border border-gray-300 placeholder-gray-600 placeholder-text-sm rounded"></select>
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  className="w-5 h-5 px-2 border border-gray-300"
                />
                <p className="text-gray-700 pl-2">Save this information for next time</p>
              </div>
              <div className="w-full h-auto mt-6">
                <div className="w-full h-auto">
                  <span className="font-semibold">Shipping Method</span>
                  <div className="w-full h-12 mt-3 bg-zinc-100 flex items-center justify-start pl-4">
                    <p className="text-gray-600">Enter your shipping address to view available shipping methods.</p>
                  </div>
                </div>
                <div className="w-full h-auto mt-6">
                  <span className="font-semibold">Payment</span>
                  <div className="w-full h-auto mt-2">
                    <p className="text-gray-600 text-sm">All transactions are secure and encrypted.</p>
                  </div>
                  <div className="w-full h-auto bg-zinc-100 mt-6">
                    <div className="flex items-center pl-4 pt-4">
                      <div className="w-full flex items-center">
                        <input
                          type="radio"
                          id="creditCard"
                          name="paymentMethod"
                          value="creditCard"
                          className="form-radio text-gray-400 border-gray-400"
                          checked={paymentMethod === 'creditCard'}
                          onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="creditCard" className="ml-2 text-gray-700">
                          Credit Card
                        </label>
                        <input
                          type="radio"
                          id="cash"
                          name="paymentMethod"
                          value="cash"
                          className="form-radio text-gray-400 border-gray-400 ml-8"
                          checked={paymentMethod === 'cash'}
                          onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor="cash" className="ml-2 text-gray-700">
                          Cash
                        </label>
                      </div>
                    </div>
                    {paymentMethod === 'creditCard' && (
                      <div className="w-full h-auto flex flex-col items-center justify-center px-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="form-input rounded w-full border border-gray-300 px-3 py-2 mb-4"
                        />
                        <div className="w-full flex justify-between">
                          <input
                            type="text"
                            placeholder="Expiration Date"
                            className="form-input border rounded w-[48%] border-gray-300 px-3 py-2 mb-4"
                          />
                          <input
                            type="text"
                            placeholder="Name on Card"
                            className="form-input border rounded w-[48%] border-gray-300 px-3 py-2 mb-4"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Name on card"
                          className="form-input w-full rounded border border-gray-300 px-3 py-2 mb-4"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                          Pay with Credit Card
                        </button>
                      </div>
                    )}
                    {paymentMethod === 'cash' && (
                      <div className="h-full w-full flex flex-col items-start justify-center lg:pl-4">
                        <label className="block mb-2 text-xl font-semibold text-gray-700">Cash on Delivery (COD)</label>
                      </div>
                    )}
                  </div>
                  <button className="sm:hidden  h-12 w-full bg-blue-500 hover:bg-blue-600 text-white rounded mt-8 font-semibold text-lg">
                    Complete Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="h-screen w-full md:w-[420px] bg-gray-50 flex flex-col items-start justify-start lg:mt-1">
          <div className="w-full">
            <div className="h-full w-full max-w-[1200px] mx-auto p-2 sm:pt-10">
              {/* Order Summary - Visible only on small screens */}
              <div className=" sm:block sm:w-full max-w-[650px] rounded-lg">
                <h2 className="h-[50px] p-2 text-2xl font-semibold mb-2">Order Summary</h2>
                <div className="flex flex-col lg:h-[380px] h-[400px] xl:h-[380px] md:h-[350px] sm:h-[340px] sm:shadow-md gap-4 overflow-y-scroll   lg:overflow-y-scroll md:overflow-y-scroll sm:overflow-y-scroll xl:overflow-y-scroll">
                  {cart.map((cartNew, id) => (
                    <div key={id} className="flex items-center justify-start md:h-[85px] md:w-[85px] xl:h-[105px] lg:justify-around xl:justify-normal xl:w-full ">
                      <img
                        className="h-[100px] w-[100px] sm:h-[70px] sm:w-[70px] md:h-[70px] md:w-[70px] rounded-xl  bg-black ml-4 sm:ml-1 "
                        src={cartNew.thumbnail}
                        alt={cartNew.title}
                      />
                      <div className="ml-4 sm:w-full w-[440px] h-[45px] xl:w-[350px] xl:ml-0 lg:flex lg:justify-between xl:flex xl:justify-between md:flex md:justify-between flex justify-between">
                        <h3 className="text-lg sm:text-base font-semibold sm:w-[170px] xl:pl-[10px] ">{cartNew.title}</h3>
                        <p className="text-lg sm:text-base text-gray-600 lg:w-[190px] lg:text-right md:w-[190px] md:text-right xl:w-[190px] xl:text-right text-right w-full ">
                          Rs {(cartNew.price * cartNew.quantity).toString().slice(0, 6).replace('.', ',') + '.00'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto mt-[20px] sm:mt-[50px] flex flex-col items-center">
            <div className="w-full max-w-[650px] flex  items-center justify-center sm:flex-row sm:justify-between p-4 lg:p-0 xl:p-0 sm:p-0 sm:px-2  rounded-lg  ">
              <p className="w-full sm:w-auto text-[17px] sm:text-[16px] lg:text-center xl:text-left text-gray-800 sm:px-2 xl:pl-[20px]">
                Subtotal
              </p>
              <p className="w-full sm:w-auto text-[17px] sm:text-[16px] text-gray-800 mt-2 sm:mt-0 sm:ml-0 ml-[300px] lg:ml-[250px] md:ml-[100px] xl:ml-[255px] sm:px-2">
                Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
              </p>
            </div>
            <div className="w-full max-w-[650px] flex  items-center justify-center md:justify-center sm:flex-row sm:justify-between p-4 lg:p-0 xl:p-0 sm:pt-1 sm:px-2 rounded-lg mt-4 md:mt-0 sm:mt-0 ">
              <p className="w-full sm:w-auto text-[22px] sm:text-[20px] font-semibold lg:text-left md:text-left lg:pl-[27px] xl:pl-[20px] sm:px-2">
                Total
              </p>
              <p className="w-full md:w-[300px] sm:w-auto text-[20px] sm:text-[20px] font-semibold mt-2 md:mt-0 sm:ml-0 ml-[300px] lg:ml-[200px] md:ml-[50px] xl:ml-[240px] sm:mt-0 sm:px-2">
                Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
              </p>
            </div>
            <button className="hidden h-12 w-full sm:w-[300px]  bg-blue-500 hover:bg-blue-600 text-white rounded mt-8 font-semibold text-lg">
              Complete Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
