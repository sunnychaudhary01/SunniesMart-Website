import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./assets/Components/Products";
import ProductsRef from "./assets/Components/ProductRef";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SearchPage from "./SearchPage";
import Cart from "./Cart";
import { Header } from "./assets/Components/Header";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./CheckOut";
import WhishLIst from "./WhishLIst";

function App() {
const [cart, setCart] = useState([]);
const [wishlist, setWishlist] = useState([]);




const wishlistFunc = (product) => {
const itemExist = wishlist.find((item)=> item.id === product.id)
if (itemExist) {
  toast.warn('Item is already in wishlist!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
}else{
  setWishlist([...wishlist, {...product}]) 
  toast.success('Item added to wishlist!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  }
}

const removeWishlistItem = (index) => {
const removedItem =  wishlist.filter((_, wishItem) => wishItem !== index)
  setWishlist(removedItem);
}

  const addToCart = (product) => {
const isProductExist = cart.find((findItem) => findItem.id === product.id  )  
if (isProductExist) {

  const updateCart = cart.map((item)=> (
    item.id === product.id? {...item, quantity:item.quantity + 1}: item
  ))
  setCart(updateCart);
  
} else {
  setCart([...cart, {...product, quantity:1}]);
  toast.success("Item added to cart", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}
};

  
  const removeItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, item) => item !== index));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const handDec = (id) => {
   const inQaunt = cart.map((item)=> item.id === id && item.quantity > 1 ? {...item, quantity:item.quantity - 1}: item );
   setCart(inQaunt);
  }

  const handInc = (id) =>{
  const decQuantity = cart.map((item)=> item.id === id && item.quantity < 10 ? {...item, quantity:item.quantity + 1}: item );
    setCart(decQuantity);
  } 

  const cartTotal = cart.reduce((acc, val)=>{
      return acc + val.price * val.quantity
  },0)

  return (
    <>
      <div>
        <ToastContainer/>
      </div>
      <BrowserRouter>
        <Header  wishlist={wishlist} cart={cart} cartTotal={cartTotal} removeItem={removeItem} handDec={handDec} handInc={handInc} className="hidden" />
        <Routes>
          <Route path="/" element={<Home wishlistFunc={wishlistFunc} addToCart={addToCart} />} />
          <Route path="/product/" element={<Products />} />
          <Route path="/products/" element={<Products removeWishlistItem={removeWishlistItem} wishlistFunc={wishlistFunc} addToCart={addToCart} cart={cart} />}/>
        <Route path="/cart/" element={<Cart cart={cart} cartTotal={cartTotal} removeItem={removeItem} emptyCart={emptyCart}  handDec={handDec} handInc={handInc} />
            }
          />
          <Route path="/signin/" element={<SignIn />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/wishlist/" element={<WhishLIst  wishlistFunc={wishlistFunc} wishlist={wishlist} />} />
          <Route path="/checkout/" element={<CheckOut cart={cart} cartTotal={cartTotal} />} />
          <Route path="/search/:id" element={<SearchPage />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/products/:id" element={<ProductsRef addToCart={addToCart}  handDec={handDec} handInc={handInc} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
