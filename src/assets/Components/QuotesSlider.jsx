import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const QuotesSlider = () => {
    const quotes = [
        { id: 1, text: "Shop the latest trends and find your perfect style at unbeatable prices!",},
        { id: 2, text: "Experience the joy of shopping with exclusive deals and discounts.",},
        { id: 3, text: "Discover the best products for every occasion, all in one place.", },
        { id: 4, text: "Quality you can trust, prices you can afford – shop with us today!" }
      ];

  const [slider, setSlider] = useState(1);

  const next = () => {
    setSlider((prevIndex ) => (prevIndex + 1) % quotes.length);
  };

  const previous = () => {
    setSlider((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="h-full w-full sm:w-full md:w-full md:h-[350px] sm:h-[370px] flex items-center justify-center bg-[#e4cfcf]">
        <div className="w-[1000px] sm:w-full h-[400px] sm:h-[370px] md:h-[350px] md:w-full absolute flex items-center justify-between">
          <button onClick={previous} className="w-10 h-12 sm:h-8 sm:w-8 sm:rounded-full sm:hover:bg-[#fff] bg-[#fff] hover:bg-[#ccc] transition 300s  flex items-center justify-center rounded-lg z-[999]  text-[#6d6b6b] hover:text-[#353030]" >
            <SlArrowLeft size={20} />
          </button>
          <button onClick={next} className="w-10 h-12 sm:h-8 sm:w-8 sm:rounded-full sm:hover:bg-[#fff] bg-[#fff] hover:bg-[#ccc] transition 300s flex items-center justify-center rounded-lg z-[999] text-[#6d6b6b] hover:text-[#2d2929]" >
            <SlArrowRight size={20} />
          </button>
        </div>
        <div className="h-full w-[850px] sm:w-full flex items-center justify-center transition duration-700 ease-in-out">
        {quotes.map((quote, index) => (
          <p key={quote.id} className={`absolute top-[50px] sm:text-xl md:text-2xl text-3xl text-center  flex flex-col items-center justify-around w-[50vw] h-[200px] ${index === slider ? 'block' : 'hidden'}`}
            style={{ transform: `translateX(${(index - slider) * 100}%)`}}>
              <span> <img className="h-[55px] w-[55px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] relative bottom-[5px] " src="quote.png" alt="" /> </span>
            {quote.text}
          </p>
        ))}
        </div>
      </div>
    </>
  );
};

export default QuotesSlider;
