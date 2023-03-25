import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row flex-wrap h-9 bg-green-600 text-sm items-center'>
    <p className=' hover:bg-green-800'><Link  className='p-2 text-center' to="/">Home</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center'  to="/Mycart">My Cart</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center'  to="/Myorders">My Orders</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center'  to="/About">About</Link></p>
    <p className=' hover:bg-green-800'><Link className='p-2 text-center'  to="/Contact">Contact us</Link></p>
    </div>
  )
}

export default Navbar;