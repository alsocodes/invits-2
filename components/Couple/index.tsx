import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Couple = () => {
  return (
    <div className='px-4 py-6 md:py-20 bg-base-100'>
      <div data-aos='fade-up' data-aos-duration='500'>
        <div
          style={{ fontFamily: 'Dancing Script' }}
          className='text-center text-2xl mb-2'
        >
          Assalamualaikum Wr, Wb.
        </div>
        <div className='text-center text-base'>
          <p className='mb-1'>
            Maha suci Allah SWT yang telah menciptakan makhluk-Nya
            berpasang-pasangan.
          </p>
          <p>
            Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau
            ciptakan di antara putra-putri kami:
          </p>
        </div>
      </div>
      <div className='block md:flex md:items-center md:justify-center md:mt-10'>
        <div className='' data-aos='fade-up'>
          <div className='w-[310px] h-[310px] mx-auto'>
            <img
              alt='brige'
              src={'/images/bride.png'}
              className='w-[260px] h-[260px] rounded-full bordexr border-red-500 ml-[25px] mt-[25px]'
            />

            <img
              alt='frame-bride'
              className='bordexr border-blue-400 w-full h-full -mt-[285px]'
              src={'/images/frame1.png'}
            />
          </div>
          <div
            style={{ fontFamily: 'Caveat' }}
            className='text-center text-4xl'
          >
            Vega Dwi Pramesti
          </div>
          <Link href={'https://www.instagram.com/galerylimo/'}>
            <a>
              <div className='flex justify-center items-center my-2'>
                <FaInstagram className='mr-2' />
              </div>
            </a>
          </Link>
          <div className='text-center text-base mt-2'>
            Putri ke-2 dari 3 bersaudara <br />
            Bapak Gunawan (alm) & Ibu Tri Handayani (almh)
          </div>
        </div>
        <div
          style={{ fontFamily: 'Caveat' }}
          className='text-center text-6xl my-10'
        >
          &
        </div>
        <div className='' data-aos='fade-up'>
          <div className='w-[310px] h-[310px] mx-auto'>
            <img
              alt='groom'
              src={'/images/groom.png'}
              className='w-[260px] h-[260px] rounded-full bordexr border-red-500 ml-[25px] mt-[25px]'
            />

            <img
              alt='frame-groom'
              className='bordexr border-blue-400 w-full h-full -mt-[285px]'
              src={'/images/frame1.png'}
            />
          </div>
          <div
            style={{ fontFamily: 'Caveat' }}
            className='text-center text-4xl'
          >
            Firdaus Pammasena Hasanudin
          </div>
          <Link href={'https://www.instagram.com/galerylimo/'}>
            <a>
              <div className='flex justify-center items-center my-2'>
                <FaInstagram className='mr-2' />
              </div>
            </a>
          </Link>
          <div className='text-center text-base mt-2'>
            Putra ke-1 dari 5 bersaudara <br />
            Bapak Hasanudin & Ibu Jumiati
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
