import Image from 'next/image';
import React from 'react';
import { FaCalendarCheck, FaClock, FaMapMarkedAlt } from 'react-icons/fa';

const SaveTheDate = () => {
  return (
    <div
      id='the-date'
      className='px-4 py-16 md:py-24 bg-white relative min-h-screen overflow-hidden'
    >
      <div className=''>
        <div className='absolute top-0 left-0'>
          <div className='w-[150px] h-[150px] sm:[w-200px] sm:h-[15ppx] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
              src={'/images/frame-tl.png'}
              layout='fill'
              objectFit='cover'
              alt='frame-top-left'
            />
          </div>
        </div>
        <div className='absolute top-0 right-0'>
          <div className='w-[150px] h-[150px] sm:[w-200px] sm:h-[15ppx] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
              src={'/images/frame-tr.png'}
              layout='fill'
              objectFit='cover'
              alt='frame-top-right'
            />
          </div>
        </div>
        <div className='absolute bottom-0 right-0'>
          <div className='w-[150px] h-[150px] sm:[w-200px] sm:h-[15ppx] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
              src={'/images/frame-br.png'}
              layout='fill'
              objectFit='cover'
              alt='frame-bottom-right'
            />
          </div>
        </div>
        <div className='absolute bottom-0 left-0'>
          <div className='w-[150px] h-[150px] sm:[w-200px] sm:h-[15ppx] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] relative'>
            <Image
              src={'/images/frame-bl.png'}
              layout='fill'
              objectFit='cover'
              alt='frame-bottom-left'
            />
          </div>
        </div>
      </div>
      <div className='md:w-[700px] mx-auto text-center text-[#226b4b]'>
        <div
          data-aos='fade-down'
          data-aos-duration='500'
          className='text-center text-3xl font-semibold'
          style={{ fontFamily: 'Dancing Script' }}
        >
          Safe The Date
        </div>

        <div className='mt-4 block md:flex md:justify-center md:gap-10 md:mt-10'>
          <div className='mt-10' data-aos='fade-right' data-aos-duration='500'>
            <div className=''>
              <div className='text-lg my-2 font-semibold'>AKAD NIKAH</div>
              <div className='flex justify-center items-center gap-2 mb-2'>
                <FaCalendarCheck />
                <span>Minggu, 06 November 2022</span>
              </div>
              <div className='flex justify-center items-center gap-2 mb-2'>
                <FaClock />
                <span>14:00 WIB</span>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <FaMapMarkedAlt />
                <span>Mempelai Putri :</span>
              </div>
              JL. Tambak Segaran Wetan 1 no. 54, Kec. Tambaksari Kel. Rangkah,
              Surabaya
            </div>

            <div className='mt-8'>
              <div className='text-lg my-2 font-semibold'>RESEPSI</div>
              <div className='flex justify-center items-center gap-2 mb-2'>
                <FaCalendarCheck />
                <span>Minggu, 06 November 2022</span>
              </div>
              <div className='flex justify-center items-center gap-2 mb-2'>
                <FaClock />
                <span>18:30 WIB s.d Selesai</span>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <FaMapMarkedAlt />
                <span>Mempelai Putri :</span>
              </div>
              JL. Tambak Segaran Wetan 1 no. 54, Kec. Tambaksari Kel. Rangkah,
              Surabaya
            </div>
          </div>
          <div
            className='w-[250px] h-[320px] md:h-[500px] md:w-[400px] relative mx-auto mt-4 md:mt-0'
            data-aos='fade-left'
            data-aos-duration='500'
          >
            <Image
              src={'/images/couple-p.png'}
              layout='fill'
              objectFit='cover'
              className='rounded-md md:rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
