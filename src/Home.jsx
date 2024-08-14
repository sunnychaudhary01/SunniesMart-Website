import React, { useState, useEffect } from 'react';
import { Header } from './assets/Components/Header';
import Hero from './assets/Components/Hero';
import Sliders from './assets/Components/Sliders';
import Preloader from './Preloader';


const Home = ({addToCart, wishlistVal, wishlistFunc }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className=""> 
          <Sliders  />
          <Hero wishlistFunc={wishlistFunc}  wishlist={wishlistVal} addToCart={addToCart} />
        </div>
      )}
    </>
  );
};

export default Home;
