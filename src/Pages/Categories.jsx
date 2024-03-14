import axios from "axios";
import React, { useState, useEffect } from "react";

const CategoryList = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products/categories');
          console.log('Response data:', response.data);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 

    return(
        <div>
            <h1>Categories</h1>
            <ul>
                {data.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList;