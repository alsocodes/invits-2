import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './Cover.module.css';

const calculateTimeLeft = (time) => {
  let difference = +new Date(time) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const endtime = '2022-11-06 14:00:00';
const Cover2 = ({ setIsOpen, isOpen, bukaUndangan }) => {
  const [timeLeft, setTimeLeft]: any = useState(calculateTimeLeft(endtime));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endtime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endtime]);

  return (
    <div
      className={`fixed top-0 w-screen h-screen z-50 transition-all duration-1000
        ${isOpen ? '-top-[1200px]' : 'top-0'}
      `}
    >
      <div
        className={`w-full 
          h-screen overflow-hidden relative bg-[#dbf4e1]`}
      >
        <div className='w-full h-full'>
          <div className='h-2/3 md:w-[600px] md:mx-auto relative overflow-hidden'>
            {/* <div className='h-2/3 full relative'> */}
            <Image
              data-aos='zoom-out'
              data-aos-duration='500'
              src={'/images/cover-1.png'}
              layout='fill'
              objectFit='cover'
              alt='cover'
            />
            <div className='absolute -bottom-1 left-0 -right-32 overflow-hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                  fill='#dbf4e1'
                  fillOpacity='1'
                  d='M0,96L720,256L1440,0L1440,320L720,320L0,320Z'
                ></path>
              </svg>
            </div>
          </div>
          <div className='h-1/3 bg-[#dbf4e1] relative p-4'>
            <div
              data-aos-duration='500'
              data-aos='fade-up'
              data-aos-delay='300'
              className='absolute -top-6 w-full left-0 right-0 px-4'
            >
              <div
                className={`text-xl md:text-center -mb-1 text-[#226b4b]  select-none ${styles.font0}`}
              >
                The Wedding of
              </div>
              <div
                className={`text-[2.5rem] md:text-center md:text-6xl text-[#226b4b]  select-none ${styles.font1}`}
              >
                Vega & Firdaus
              </div>
              <div className='text-sm text-[#226b4b] mt-2 text-center select-none'>
                Minggu, 06 November 2022
                <div className='flex justify-between w-[300px] mx-auto mt-2'>
                  <div className='text-center'>
                    <div className='text-2xl'>{timeLeft?.days || '00'}</div>
                    <div className='text-sm'>Hari</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl'>{timeLeft?.hours || '00'}</div>
                    <div className='text-sm'>Jam</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl'>{timeLeft?.minutes || '00'}</div>
                    <div className='text-sm'>Menit</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl'>{timeLeft?.seconds || '00'}</div>
                    <div className='text-sm'>Detik</div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-4'>
                <button
                  className='btn btn-primary btn-md text-gray-100'
                  onClick={() => {
                    setIsOpen(true);
                    bukaUndangan();
                  }}
                >
                  Buka Undangan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover2;
