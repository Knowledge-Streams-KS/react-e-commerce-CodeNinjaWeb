import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {/* Render your data here */}
          {data.map(item => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductList;