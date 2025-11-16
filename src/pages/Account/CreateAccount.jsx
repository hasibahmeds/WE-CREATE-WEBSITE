import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { BiShowAlt, BiSolidHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router';
import auth from '../../firebase.init';
// import './CreateAccount.css';


const CreateAccount = () => {
  const navigator = useNavigate();

  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const {                        //at first
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password);
        navigator('/');
        console.log(data);
        console.log("Successfully Created Account");
      };                              //end


    return (
        <div className='backg h-[633px]'>
            
            <div className="py-[30px]">
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-[5px]">Create Account</h1>      
        <div className="max-w-md mx-auto bg-transparent p-8 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className=" text-sm font-medium text-gray-200"
              >
                First Name
              </label>
              <input
                id="firstName"
                 placeholder="Enter your first name"
                {...register("firstName", { required: true, maxLength: 20 })}
                className="mt-1 w-full px-3 py-2 border bg-transparent text-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className=" text-sm font-medium text-gray-200"
              >
                Last Name
              </label>
              <input
                id="lastName"
                 placeholder="Enter your last name"
                {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                className="mt-1 w-full px-3 py-2 border bg-transparent text-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>


            <div>
              <label
                htmlFor="email"
                className=" text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                 placeholder="Enter your email"
                type="email"
                {...register("email", { required: true })}
                className="mt-1 w-full px-3 py-2 border bg-transparent text-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className=" text-sm font-medium text-gray-200"
              >
                Password
              </label>
              
              <div className='relative'>
              <input
                id="password"
                 placeholder="Enter your password"
                type={showPassword ? "text" : "password"} // Toggle input type
                {...register("password", { required: true })}
                className="mt-1 w-full px-3 py-2 border bg-transparent text-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? <BiSolidHide /> : <BiShowAlt />}
                </button>
                </div>
            </div>


            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-amber-400 bg-stone-950 hover:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-amber-400"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
    <span className="text-sm font-bold text-gray-200">Have an account?</span>
    <Link
      to="/Login" 
      className="ml-2 text-sm font-bold text-amber-400 hover:text-amber-300"
    >
      Login
    </Link>
  </div>
        </div>
      </div>




        </div>
    );
};

export default CreateAccount;