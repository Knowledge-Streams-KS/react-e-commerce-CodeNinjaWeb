import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  const navigate = useNavigate();

  const redirect = () => {
    navigate("/")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('Response data:', response.data);
        setData(response.data);
        setSortedData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  

  const handleSort = (option) => {
    setSortOption(option);
    const sorted = [...data];

    switch (option) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'title-asc':
        sorted.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        break;
      case 'title-desc':
        sorted.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        break;
      default:
        break;
    }

    setSortedData(sorted);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSortedData(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      /> &nbsp;&nbsp;
      <button type="submit" onClick={redirect}>Goto Homepage!!!</button>
      <div>
        <label htmlFor="sortDropdown">Sort by: </label>
        <select id="sortDropdown" value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          <option value="">-- Select a sort option --</option>
          <option value="price-asc">Price (Asc)</option>
          <option value="price-desc">Price (Desc)</option>
          <option value="title-asc">Title (Asc)</option>
          <option value="title-desc">Title (Desc)</option>
        </select>
      </div>
      {sortedData.length > 0 ? (
        <div>
          {sortedData.map(item => (
            <div key={item.id}>
              <p>Name: {item.title}</p>
              <p>Price: ${item.price}</p>
              <p>Description: {item.description}</p>
              <p>Category: {item.category}</p>
              <img src={item.image} alt={item.title} style={{ maxWidth: "100px" }} />
              <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
};

export default ProductList;