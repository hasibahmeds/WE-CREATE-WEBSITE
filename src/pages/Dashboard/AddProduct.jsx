import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageHostKey = '352945f21d375fb2b2a488d0a21f6618';

    const onSubmit = (data) => {


        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const uri = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(uri, { method: 'POST', body: formData })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const img = imageData.data.url;
                    const product = {
                        productName: data.productName,
                        quantity: data.quantity,
                        price: data.price,
                        imageUrl: data.imageUrl,
                        image: img,
                        description: data.description,

                    };
                    // send data to the server
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(product),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            reset(); // Reset the form after successful submission
                            toast.success('Product added successfully!');
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            toast.error('Failed to add product. Please try again.');
                        });
                }
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                toast.error('Failed to upload image. Please try again.');
            });
    }
    return (
        <div className="bg-[#f3f2f1]  min-h-screen py-10">
            <h1 className="text-3xl text-center font-bold text-black mb-[20px]">
                Add Product
            </h1>

            <div className="container mx-auto px-4">
                <form
                    className="flex justify-center gap-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mt-5 pr-10 bg-transparent p-8 rounded-xl shadow-2xl w-full  max-w-md">
                        {/* product name */}
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="productName">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="shadow border rounded w-full py-2 px-3 bg-transparent ring-1 ring-stone-400 text-black focus:outline-none focus:shadow-outline"
                                {...register('productName', { required: true })}
                            />

                            <label className="label">
                                {errors.productName && (
                                    <span className="text-red-500 text-xs italic">This field is required</span>
                                )}
                            </label>
                        </div>
                        {/* quantity */}
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="quantity">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Product Quantity"
                                className="shadow border rounded w-full py-2 px-3 bg-transparent ring-1 ring-stone-400 text-black focus:outline-none focus:shadow-outline"
                                {...register('quantity', { required: true })}
                            />
                            <label className="label">
                                {errors.quantity && (
                                     <span className="text-red-500 text-xs italic">This field is required</span>
                                )}
                            </label>
                        </div>
                        {/* price */}
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="price">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Product Price"
                                className="shadow border rounded w-full py-2 px-3 bg-transparent ring-1 ring-stone-400 text-black focus:outline-none focus:shadow-outline"
                                {...register('price', { required: true })}
                            />

                            <label className="label">
                                {errors.price && (
                                     <span className="text-red-500 text-xs italic">This field is required</span>
                                )}
                            </label>
                        </div>
                        {/* image url */}
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="imageUrl">
                                <span className="label-text">Product Image URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product Image URL"
                                className="shadow border rounded w-full py-2 px-3 bg-transparent ring-1 ring-stone-400 text-black focus:outline-none focus:shadow-outline"
                                {...register('imageUrl', { required: true })}
                            />

                            <label className="label">
                                {errors.imageUrl && (
                                     <span className="text-red-500 text-xs italic">This field is required</span>
                                )}
                            </label>
                        </div>

                        {/* product image from folder */}
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="image">
                                <span className="label-text">Product image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Product image"
                                className="shadow border rounded w-full py-2 px-3 bg-transparent ring-1 ring-stone-400 text-black focus:outline-none focus:shadow-outline"
                                {...register('image', { required: true })}
                            />

                            <label className="label">
                                {errors.image && (
                                     <span className="text-red-500 text-xs italic">This field is required</span>
                                )}
                            </label>
                        </div>
                        {/* description */}
                        <div className="mb-6">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="description">
                                <span className="label-text">Product description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product description"
                                className="shadow border rounded w-full py-2 px-3 bg-transparent ring-1 ring-stone-400 text-black focus:outline-none focus:shadow-outline"
                                {...register('description', { required: true })}
                            />

                            <label className="label">
                                {errors.description && (
                                     <span className="text-red-500 text-xs italic">This field is required</span>
                                )}
                            </label>
                        </div>
                        {/* submit button */}
                        <div className="form-control mt-6">
                            <button className="bg-black hover:text-amber-400 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;




























// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';

// const AddProduct = () => {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();
//     const imageHostKey='352945f21d375fb2b2a488d0a21f6618'
  
//     const onSubmit = (data) => {
     
  
//       const image = data.image[0];
//       const formData = new FormData();
//       formData.append('image', image);  
     
//       const uri=`https://api.imgbb.com/1/upload?key=${imageHostKey}`;
//       fetch(uri, { method: 'POST', body: formData })
//         .then(res => res.json())  
//         .then(imageData => {
//           if (imageData.success) {    
//             const img = imageData.data.url;
//             const product = {   
//               productName: data.productName,    
//               quantity: data.quantity,
//               price: data.price,
//               imageUrl: data.imageUrl,
//               image: img,
//               description: data.description,
  
//             };

//             fetch('http://localhost:5000/products', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(product),  
//             })
//               .then(res => res.json())  
//               .then(data => {
//                 console.log(data);
//                 reset(); 
//                 toast.success('Product added successfully!');
//               })
//               .catch(error => {
//                 console.error('Error:', error);
//                 toast.error('Failed to add product. Please try again.');
//               });
//           }
//         })
//         .catch(error => { 
//           console.error('Error uploading image:', error);
//           toast.error('Failed to upload image. Please try again.');
//         });
//     }
//     return (
//         <div>
//                   <h1 className="text-3xl text-center font-bold bg-stone-900 text-white py-2">
//         Add Product
//       </h1>

//       <div>
//         <form
//           className="flex justify-center gap-4"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="mt-5 pr-20 bg-slate-400 p-10 rounded-xl">

//             <div>
//               <label className="label">
//                 <span className="label-text">Product Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Product Name"
//                 className="input input-bordered w-full max-w-xs bg-slate-200"
//                 {...register('productName', { required: true })}
//               />

//               <label className="label">
//                 {errors.productName && (
//                   <span className="text-red-600">This field is required</span>
//                 )}
//               </label>
//             </div>

//             <div>
//               <label className="label">
//                 <span className="label-text">Product Quantity</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="Product Quantity"
//                 className="input input-bordered w-full max-w-xs bg-slate-200"
//                 {...register('quantity', { required: true })}
//               />
//               <label className="label">
//                 {errors.quantity && (
//                   <span className="text-red-600">This field is required</span>
//                 )}
//               </label>
//             </div>

//             <div>
//               <label className="label">
//                 <span className="label-text">Product Price</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="Product Price"
//                 className="input input-bordered w-full max-w-xs bg-slate-200"
//                 {...register('price', { required: true })}
//               />

//               <label className="label">
//                 {errors.price && (
//                   <span className="text-red-600">This field is required</span>
//                 )}
//               </label>
//             </div>

//             <div>
//               <label className="label">
//                 <span className="label-text">Product Image</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Product Image"
//                 className="input input-bordered w-full max-w-xs bg-slate-200"
//                 {...register('imageUrl', { required: true })}
//               />

//               <label className="label">
//                 {errors.imageUrl && (
//                   <span className="text-red-600">This field is required</span>
//                 )}
//               </label>
//             </div>


//             <div>
//               <label className="label">
//                 <span className="label-text">Product image</span>
//               </label>
//               <input
//                 type="file"
//                 placeholder="Product image"
//                 className="input input-bordered w-full max-w-xs pt-1 bg-slate-200"
//                 {...register('image', { required: true })}
//               />

//               <label className="label">
//                 {errors.image && (
//                   <span className="text-red-600">This field is required</span>
//                 )}
//               </label>
//             </div>

//             <div>
//               <label className="label">
//                 <span className="label-text">Product description</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Product description"
//                 className="input input-bordered w-full max-w-xs bg-slate-200"
//                 {...register('description', { required: true })}
//               />

//               <label className="label">
//                 {errors.description && (
//                   <span className="text-red-600">This field is required</span>
//                 )}
//               </label>
//             </div>

//             <div className="form-control mt-6">
//               <button className="btn bg-stone-900 w-full" type="submit">
//                 Add Product
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//         </div>
//     );
// };

// export default AddProduct;