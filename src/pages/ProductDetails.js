import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProducts] = useState([]);
  const {productId} = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <>
    {product && 
    <>
     <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
    }

      
      
    </>
  );
}

export default ProductDetails;
