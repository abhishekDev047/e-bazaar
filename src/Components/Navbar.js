import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row flex-wrap h-9 bg-green-600 text-sm sm:text-lg items-center'>
    <p className=' hover:bg-green-800'><Link  className='p-2 text-center md:mx-2 lg:mx-4' to="/">Home</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center md:mx-2 lg:mx-4'  to="/Mycart">My Cart</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center md:mx-2 lg:mx-4'  to="/Myorders">My Orders</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center md:mx-2 lg:mx-4'  to="/About">About</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center md:mx-2 lg:mx-4'  to="/Contact">Contact us</Link></p>
    </div>
  )
}

export default Navbar;