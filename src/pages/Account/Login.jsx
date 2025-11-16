import React from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import auth from './../../firebase.init';
// import './Login.css';

const Login = () => {
const navigator = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    await signInWithEmailAndPassword(data.email, data.password);
    navigator('/');
    console.log('User Data:', data);

  };                                   // show data in console

  return (
    <div className="back  h-[633px]">


        <div className="py-[130px]">
        {/* form from firebase  */}
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-[5px]">Login</h1>                     
        <div className="max-w-md mx-auto bg-transparent p-8 rounded-lg shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                className=" text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                maxLength: 50,
              })}
                className="mt-1 w-full px-3 py-2 border bg-transparent text-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500"
              />
                          {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            </div>


            <div>
              <label
                className=" text-sm font-medium text-gray-200"
              >
                Password
              </label>
              <input
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: 6,
                maxLength: 20,
              })}
                className="mt-1 w-full px-3 py-2 border bg-transparent text-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-yellow-500"
              />
              {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-amber-400 bg-stone-950 hover:bg-stone-900 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-amber-400"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
    <span className="text-sm font-bold text-gray-200">Don't have an account?</span>
    <Link
      to="/CreateAccount" 
      className="ml-2 text-sm font-bold  text-amber-400 hover:text-amber-300"
    >
      Create Account
    </Link>
  </div>
        </div>
        {/* form from firebase  */}


        </div>





    </div>
  );
};

export default Login;
