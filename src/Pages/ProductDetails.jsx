import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const x = useParams();
    console.log(x);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/'+ x.id);
                console.log('Response data:', response.data);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {product && (
                <div>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <img src={product.image} alt={product.title} style={{width:"200px", height:"200px"}} />
                    <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;
