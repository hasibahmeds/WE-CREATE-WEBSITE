import React, { useEffect, useState } from "react";
import ShowOneProduct from "./ShowOneProduct";

const ShowProduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [products]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProduct(remaining);
          }
        });
    }
  };
  return (
    <div>
    <h1>Show Product</h1>

    <div className="overflow-x-auto table-primary rounded-box border border-black bg-slate-200 text-black">
      <table className="table text-black text-center">
        {/* head */}
        <thead>
          <tr>
            <th className='text-black border-[1px] border-black border-t-0 border-l-0'>Index</th>
            <th className='text-black border-[1px] border-black border-t-0'>Product Name</th>
            <th className='text-black border-[1px] border-black border-t-0'>Quantity</th>
            <th className='text-black border-[1px] border-black border-t-0'>Price</th>
            <th className='text-black border-[1px] border-black border-t-0'>Description</th>
            <th className='text-black border-[1px] border-black border-t-0 border-r-0'>Delete</th>
          </tr>
        </thead>
        <tbody>

          {products.map((product, index) => {
            return (
              <ShowOneProduct
                key={index}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              />
            );
          }

          )}
                   
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ShowProduct;
