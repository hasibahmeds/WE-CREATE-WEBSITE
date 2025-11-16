import React from 'react';

const ShowOneProduct = ({ product, index, handleDelete }) => {
    return (
        <tr>
        <th className="border-[1px] border-black border-l-0">{index}</th>
        <td className="border-[1px] border-black">
          <div className="flex gap-2 items-center">
            <div>
              <img className="w-10 h-10 rounded-lg" src={product?.image} alt="" />
            </div>
            <div>{product?.productName}</div>
          </div>
        </td>
        <td className="border-[1px] border-black">{product?.quantity}</td>
        <td className="border-[1px] border-black">{product?.price}</td>
        <td className="border-[1px] border-black">{product?.description}</td>
        <td className="border-[1px] border-black border-r-0">
          <button
            onClick={() => handleDelete(product?._id)}
            className="btn bg-stone-950"
          >
            Delete
          </button>
        </td>
      </tr>
    );
};

export default ShowOneProduct;