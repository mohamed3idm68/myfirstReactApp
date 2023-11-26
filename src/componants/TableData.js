import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TableData() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  let deteteProduct = (product) => {
    Swal.fire({
      title: `are you sure y want to detete ${product.title}`,
      showCancelButton: true,
    }).then((data) => {
      if(data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getAllProducts(data));
      }
    });
  };

  return (
    <>
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {Products.map((product) => {
          return (
            <>
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 31)}...</td>
                <td>{product.price}</td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deteteProduct(product)}
                >
                  Delete
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-info btn-sm"
                >
                  View
                </Link>
                <button className="btn btn-primary btn-sm">Edit</button>
              </tr>
            </>
          );
        })}
      </tbody>
    </>
  );
}

export default TableData;
