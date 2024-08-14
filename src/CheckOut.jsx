import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./assets/Components/Footer";


const CheckOut = ({cart, cartTotal}) => {

    const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Default to credit card form

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

  return (
    <>
      <div className="h-full w-full flex items-center justify-center sm:w-full sm:h-full sm:flex-col ">
        <div className="h-screen w-full sm:h-full flex flex-col items-center justify-center pl-4 sm:pl-2 overflow-y-scroll">
  <div className="h-auto sm:h-full w-full sm:mt-[0px] flex flex-col sm:justify-center sm:items-center pt-10 sm:pt-5">
    <div className="w-full flex items-end justify-between sm:px-[8px]">
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
              <div className="h-full w-full flex flex-col items-center justify-center">
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

<div className="h-screen w-full bg-gray-50 flex flex-col items-start justify-start">
  <div className="w-full">
    <div className="h-full w-full max-w-[1200px] mx-auto p-2 sm:pt-10">
      {/* Order Summary - Visible only on small screens */}
      <div className=" sm:block sm:w-full max-w-[650px]   rounded-lg  ">
        <h2 className="h-[50px] p-2 text-2xl font-semibold mb-2">Order Summary</h2>
        <div className="flex flex-col gap-4">
          {cart.map((cartNew, id) => (
            <div key={id} className="flex items-center justify-between">
              <img
                className="h-[100px] w-[100px] sm:h-[70px] sm:w-[70px] rounded-xl  bg-black ml-4 sm:ml-1 "
                src={cartNew.thumbnail}
                alt={cartNew.title}
              />
              <div className="ml-4 sm:w-full w-[250px] h-[45px]">
                <h3 className="text-lg sm:text-base font-semibold  w-full sm:w-[170px]">{cartNew.title}</h3>
                <p className="text-lg sm:text-base text-gray-600">
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
    <div className="w-full max-w-[650px] flex  items-center justify-center sm:flex-row sm:justify-between p-4 sm:p-0 sm:px-2  rounded-lg">
      <p className="w-full sm:w-auto text-[17px] sm:text-[16px] text-gray-800 sm:px-2">
        Subtotal
      </p>
      <p className="w-full sm:w-auto text-[17px] sm:text-[16px] text-gray-800 mt-2 sm:mt-0 sm:ml-0 ml-[300px]  sm:px-2">
        Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
      </p>
    </div>
    <div className="w-full max-w-[650px] flex  items-center justify-center sm:flex-row sm:justify-between p-4  sm:pt-1 sm:px-2 rounded-lg mt-4 sm:mt-0 ">
      <p className="w-full sm:w-auto text-[22px] sm:text-[20px] font-semibold  sm:px-2">
        Total
      </p>
      <p className="w-full sm:w-auto text-[20px] sm:text-[20px] font-semibold mt-2 sm:ml-0 ml-[300px] sm:mt-0 sm:px-2">
        Rs {(cartTotal).toString().slice(0, 6).replace('.', ',') + '.00'}
      </p>
    </div>
    <button className="lg:hidden h-12 w-full sm:w-[300px]  bg-blue-500 hover:bg-blue-600 text-white rounded mt-8 font-semibold text-lg">
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
