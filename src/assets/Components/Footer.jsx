import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div>
        <footer className="w-full sm:h-full sm:w-full text-gray-800 bg-gray-200 body-font pt-5 md:flex md:flex-col md:items-center md:justify-center flex flex-col items-center justify-center">
          <div className="sm:w-full sm:h-full md:w-full sm:flex sm:flex-col sm:items-center md:px-1 py-12 w-[90vw] md:mx-0 flex items-start justify-start md:flex-row md:items-start md:justify-center">
            <div className="flex flex-col items-start sm:items-center justify-center w-[350px] md:items-start gap-4 md:gap-1 md:w-[40vw] mb-10 md:mb-0 md:pl-4 sm:w-full">
              <p className='text-3xl md:text-2xl '>About Us.</p>
              <p className="mt-2 text-md md:text-md text-gray-800 md:w-[250px] text-left sm:text-center sm:px-5  md:text-left">SunniesMart E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.</p>
              <p className='font-bold text-gray-600 md:text-lg text-xl'>Guaranteed safe checkout</p>
              <div className='flex space-x-4'>
                <img className='h-[45px] w-[50px] object-fill rounded-lg' src="./amazon2.svg" alt="Amazon" />
                <img className='h-[45px] w-[50px] object-fill rounded-lg' src="./google2.svg" alt="Google" />
                <img className='h-[45px] w-[50px] object-fill rounded-lg' src="./visa2.svg" alt="Visa" />
              </div>
            </div>
            <div className="w-full sm:flex sm:flex-col md:w-[70vw] md:h-full flex  md:flex md:justify-center justify-around md:pl-1">
              <div className="w-full md:w-full flex flex-col items-center md:items-start mb-8 md:mb-0">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl md:text-xl mb-5">Quick Link</h2>
                <nav className="list-none flex flex-col items-center md:items-start gap-3">
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">My Account</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">My Cart</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Wishlist Service</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Gift Card</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Need Help?</a></li>
                </nav>
              </div>
              <div className="w-full md:w-full flex flex-col items-center md:items-start mb-8 md:mb-0">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl md:text-xl mb-5">Information</h2>
                <nav className="list-none flex flex-col items-center md:items-start gap-3">
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">About us</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Contact</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Blogs Service</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Size Chart</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">FAQ</a></li>
                </nav>
              </div>
              <div className="w-full md:w-full flex flex-col items-center md:items-start mb-8 md:mb-0">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl md:text-xl mb-5">Policies</h2>
                <nav className="list-none flex flex-col items-center md:items-start gap-3">
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Privacy policy</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Refund Policy</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Terms of Service</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Shipping Policy</a></li>
                  <li><a className="text-gray-800 hover:text-blue-400 cursor-pointer">Contact Information</a></li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 border-t md:w-full w-full border-gray-300">
            <div className="container mx-auto text-center md:text-left py-4 px-5 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-800 text-md">© 2024 <strong>SunniesMart</strong>
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">All rights reserved.</a>
              </p>
              <div className="flex justify-center space-x-4 mt-4 md:mt-0">
                <Link to="https://www.linkedin.com/in/shani-kannaujiya-592a59287"><FaLinkedinIn className="hover:text-blue-600 transition delay-100 cursor-pointer" size={22} /></Link>
                <Link to="https://github.com/Sunnychaudhary01"><FaGithub className="hover:text-blue-600 transition delay-100 cursor-pointer" size={21} /></Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
