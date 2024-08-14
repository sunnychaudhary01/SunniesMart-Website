import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = ({ onDataItem }) => {

const [val,setVal] = useState([])


useEffect(()=> {
axios.get('https://dummyjson.com/products')
.then(response => {
  onDataItem(response.data.products)
  setVal(response.data.products)
})
.catch(error => {
  console.error('Error fetching data', error);
})

},[])



  return (
    <>
      <div>

      </div>
    </>
  );
};

export default Data;
