import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import  { useState } from 'react';
import Navbar from '../components/Navbar';

export const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <Navbar/>
          <div className="grid grid-cols-12">
  {/* Sidebar */}
  <div className="col-span-2 bg-gray-300 min-h-screen p-6">
    <ul className="space-y-4">
      <li className="border border-gray-400 rounded-md py-2 px-4 hover:bg-gray-200">
        <Link to={""} className="block text-black">Dashboard</Link>
      </li>
      <li className="border border-gray-400 rounded-md py-2 px-4 hover:bg-gray-200">
        <Link to={"all-products"} className="block text-black">All Products</Link>
      </li>
      <li className="border border-gray-400 rounded-md py-2 px-4 hover:bg-gray-200">
        <Link to={"add-products"} className="block text-black">Add Product</Link>
      </li>
      {/* <li className="border border-gray-400 rounded-md py-2 px-4 hover:bg-gray-200">
        <Link to={"/"} className="block text-black">Home</Link>
      </li> */}
    </ul>
  </div>

  {/* Main Content */}
  <div className="col-span-10 p-6 bg-gray-100">
    <Outlet />
  </div>
</div>

    </>
  )
}
