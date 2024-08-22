import axios from "axios";
import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";


const Sliders = () => {
  const [slide, setSlide] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(()=> {
    axios.get('https://dummyjson.com/products')
    .then(response => {
      setProduct(response.data.products.filter(
        (products) =>
          products.title === "Chanel Coco Noir Eau De" ||
          products.title === "Honey Jar" ||
          products.title === "Knoll Saarinen Executive Conference Chair"
      ))
    })
    .catch(error => {
      console.error('Error fetching data', error);
    })
    
    },[])


    const previous = () => {
      setSlide((prev) => (prev === 0 ? product.length - 1 : prev - 1));
    };
    
    const next = () => {
      setSlide((prev) => (prev === product.length - 1 ? 0 : prev + 1));
    };
    

useEffect(() => {
  const interval = setInterval(() => {
  next() 
}, 2000);
return () => clearInterval(interval);
}, [next])




  return (
    <>
      <div className="w-full h-[100vh] mx-auto sm:h-[700px] overflow-hidden sm:flex sm:justify-center lg:justify-center md:justify-center flex items-center  relative">
        <div className="w-[90vw] md:w-full sm:w-[100vw] xl:w-[100vw] lg:w-[98vw] h-[5vh] mx-[65px] lg:mx-0 xl:mx-0 sm:mx-[0px] md:mx-0 absolute sm:top-[200px] flex items-center justify-between sm:justify-between z-[10]">
          <button
            onClick={previous}
            className="w-10 h-16 z-[999] pl-[20px] lg:pl-0 text-[#6d6b6b] hover:text-[#353030]"
          >
            <SlArrowLeft size={27}  />
          </button>
          <button
            onClick={next}
            className="w-10 h-16 z-[999] text-[#6d6b6b] hover:text-[#353030]"
          >
            <SlArrowRight size={27}  />
          </button>
        </div>
        <div className="w-full h-full sm:h-full sm:items-start flex items-center" style={{ transform: `translateX(-${slide * 100}%)`}}>
          {product.map((item, index) => (
              <div key={index}
                className="w-full h-full sm:w-full sm:h-full sm:gap-2 flex items-center rounded-xl shadow-lg bg-[#f9ebeb] shrink-0">
                <Link to={`/products/${item.id}`} className="w-full sm:w-full h-full sm:flex-col flex items-center">
                  <div className="w-[50%] sm:h-[450px] sm:w-[50vw] h-[55vh] md:w-[55vw] md:h-[65vh] lg:w-[45vw] lg:h-[65vh] xl:w-[50vw] xl:h-[75vh]  sm:pt-[30px] z-[999] flex justify-center items-center">
                    <img className="h-[80vh] w-[40vw] sm:h-[250px] sm:w-[250px] xl:w-[450px] xl:h-[410px] md:w-full md:h-full lg:w-[400px] lg:h-[400px] object-cover sm:object-cover"
                      src={item.thumbnail}
                      alt={item.title} />
                  </div>
                  <div className="w-[50%] h-full sm:w-[80vw] sm:max-h-[950px] sm:flex sm:justify-center sm:items-center  sm:pt-[0px] md:pt-[20px] flex flex-col justify-center items-start sm:p-1 p-8 md:pl-0 lg:pl-0 lg:w-[50vw] lg:h-[450px] ">
                    <h2 className="text-5xl sm:text-[34px] md:w-full lg:w-full md:text-[34px] lg:text-[40px] sm:text-center sm:flex  sm:items-center sm:justify-center font-semibold">{item.title}</h2>
                    <p className="h-[150px] w-[78%] sm:h-[100px] sm:flex sm:items-center sm:p-1 sm:justify-center sm:w-full lg:w-full sm:text-center sm:text-[16px] sm:pt-[40px] md:text-[20px] lg:text-[20px] md:w-full pt-[40px] text-[22px] font-normal text-gray-700">
                      {item.description}
                    </p>
                    <button className="h-[50px] w-[145px] sm:h-[35px] sm:w-[105px] z-[999] font-semibold sm:text-[15px] text-[17px] text-white bg-[#8888fa] hover:border-2 hover:border-gray-700 rounded-sm capitalize hover:bg-transparent hover:text-gray-700 transition duration-500 ease-in-out sm:mt-[45px] md:mt-[110px] lg:mt-[70px] mt-[100px]">
                      Shop Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sliders;