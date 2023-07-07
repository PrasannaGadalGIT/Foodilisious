import React from "react";
import BasicMenu from "@/component/menue";
import { useEffect, useState, useRef } from "react";
import Card from "../../component/card";
import Map from "@/component/map";
import Navbar from "@/component/Navbar";
import { useSelector } from 'react-redux'


const Home = () => {
  const [productList, setProductList] = useState([]);

  const inputRef = useRef(null);
  const {id} = useSelector(state => state.user)

  const fetchProducts = async () => {
   
    try {
      const res = await fetch("http://localhost:3001/getAllMenue");
      const data = await res.json();
 
      setProductList(data.foodMenueList);
      
    } catch (err) {
      alert(err);
    }
  };

 

  useEffect(() => {
    //Runs only on the first render
    fetchProducts();
  }, []);

  

  

  

  return (
    <div>
      <div className="menue">
        <div >
          <BasicMenu className=" bg-white text-black"/>
        </div>
        <div>
          <Navbar />
        </div>
        
      </div>

      <div className="content">
        Wanna taste some food?
        <br></br>
        Then you are one click ahead to reach out to food
        <br/>
        <button className=" bg-black text-center font-black p-3 rounded-2xl space-y-3">Order Now</button>
      </div>

      <div className="backImg"></div>

      

      <div className="Products">
        {productList.length > 0 && productList.length < 4
          ? productList.map((item) => {
              return <Card item={item} />;
            })
          : "loading"}
       
      </div>
      
      

    </div>
  )
          } 

export default Home