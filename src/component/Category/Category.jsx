import axios from "axios";
import React, {  useEffect, useState } from "react";
import Home from "../Home/Home.jsx";

export default function Category() {
    const [items, setItems] = useState([]);
  //   const [isActive, setIsActive] = useState(false);
  
    async function GetData() {
      let { data } = await axios.get(
        `https://swensonhe-dev-challenge.s3.us-west-2.amazonaws.com/categories.json`
      );
      // console.log(data)
      setItems(data);

    }
    useEffect( ()=>{
        GetData()
    },[])
    



return(
    <>
      <Home categories={items} />
    
    </>
)



}