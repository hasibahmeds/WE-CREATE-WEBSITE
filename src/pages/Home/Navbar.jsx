import React from 'react';
import './Navbar.css';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from './../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    console.log(user)

    const logOut = () => {
        signOut(auth);
    };
    return (
        <header className='header'>
            <a href='#hero' className='logo mr-[80px]'>WECREATE</a>

            <nav className='navbar'>
                <div className='ml-[56px]'>
                <a href='#hero'>Home</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#brand'>Brand</a>
                <a href='#construction'>Construction</a>
                <a href='#mockup'>Mockup</a>
                <a href='#contact'>Contact</a>
                {
                    user.email==="hasib123@gmail.com"? <Link to='/dashboard'>Dash</Link>:<></>
                }
                </div>


                <div className="text-lg text-white pr-[20px]">
                    {user ? (
                        <button onClick={logOut} className="flex items-center gap-2 ml-[130px]">
                            <FaUser />
                            LogOut
                        </button>
                    ) : (
                        <Link to="/Login" className="flex items-center gap-2">
                            <FaUser />
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;