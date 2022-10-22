import React from 'react';
import {
  FaHome,
  FaCalendarAlt,
  FaHeart,
  FaBook,
  FaPhotoVideo,
  FaImage,
  FaImages,
} from 'react-icons/fa';

const BottomNavbar = ({ isOpen, activeMenu, navigationAction }) => {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } btm-nav bg-white z-20 lg:px-32 xl:px-72 text-primary shadow-2xl shadow-slate-700`}
    >
      <button
        className={activeMenu === 'the-home' && 'bg-primary text-base-100'}
        onClick={() => navigationAction('the-home')}
      >
        <FaHome size={24} />
        <span className='btm-nav-label hidden md:inline'>Home</span>
      </button>
      <button
        className={activeMenu === 'the-couple' && 'bg-primary text-base-100'}
        onClick={() => navigationAction('the-couple')}
      >
        <FaHeart size={24} />
        <span className='btm-nav-label hidden md:inline'>Pasangan</span>
      </button>
      <button
        className={activeMenu === 'the-date' && 'bg-primary text-base-100'}
        onClick={() => navigationAction('the-date')}
      >
        <FaCalendarAlt size={24} />
        <span className='btm-nav-label hidden md:inline'>Acara</span>
      </button>
      <button
        className={activeMenu === 'the-gallery' && 'bg-primary text-base-100'}
        onClick={() => navigationAction('the-gallery')}
      >
        <FaImages size={24} />
        <span className='btm-nav-label hidden md:inline'>Gallery</span>
      </button>

      <button
        className={activeMenu === 'the-book' && 'bg-primary text-base-100'}
        onClick={() => navigationAction('the-book')}
      >
        <FaBook size={24} />
        <span className='btm-nav-label hidden md:inline'>Buku Tamu</span>
      </button>
    </div>
  );
};

export default BottomNavbar;
