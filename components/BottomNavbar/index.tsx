import React from 'react';
import { FaHome, FaCalendarAlt, FaHeart, FaMap, FaBook } from 'react-icons/fa';

const BottomNavbar = ({ isOpen }) => {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } btm-nav bg-white z-20 text-primary shadow-2xl shadow-slate-700`}
    >
      <button>
        <FaHome />
        <span className='btm-nav-label hidden md:inline'>Home</span>
      </button>
      <button>
        <FaHeart />
        <span className='btm-nav-label hidden md:inline'>Pasangan</span>
      </button>
      <button className=''>
        <FaCalendarAlt />
        <span className='btm-nav-label hidden md:inline'>Acara</span>
      </button>
      <button>
        <FaMap />
        <span className='btm-nav-label hidden md:inline'>Lokasi</span>
      </button>

      <button>
        <FaBook />
        <span className='btm-nav-label hidden md:inline'>Buku Tamu</span>
      </button>
    </div>
  );
};

export default BottomNavbar;
