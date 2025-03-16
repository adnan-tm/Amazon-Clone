
import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data); 
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err); 
        setIsLoading(false)
        setProduct(null); 
      });
  }, [productId]);

  return (
    <LayOut>
      {product ? (
        
<ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
      ) : (
        <div>Loading...</div> 
      )
      }
    </LayOut>
  );
}

export default ProductDetail;
