import Image from 'next/image';
import React from 'react';
import styles from './Cover.module.css';

const Cover2In = () => {
  return (
    <div className={`w-full h-full overflow-hidden bg-[#dbf4e1]`}>
      <div className='w-full h-full'>
        <div className='h-2/3 md:w-[600px] md:mx-auto relative overflow-hidden'>
          <Image
            src={'/images/cover-1.png'}
            layout='fill'
            objectFit='cover'
            className=''
            alt='cover'
          />
          <div className='absolute -bottom-1 left-0 -right-10 -ml-10'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
              <path
                fill='#dbf4e1'
                fill-opacity='1'
                d='M0,96L720,256L1440,0L1440,320L720,320L0,320Z'
              ></path>
            </svg>
          </div>
        </div>
        <div className='h-1/3 bg-[#dbf4e1] relative p-4 select-none'>
          <div className='absolute -top-2 md:top-0 w-full left-0 right-0 px-4'>
            <div
              className={`text-[2.5rem] text-center md:text-6xl text-[#226b4b] ${styles.font1}`}
            >
              Vega & Firdaus
            </div>
            <div className='text-sm text-[#226b4b] mt-2 text-center'>
              Minggu, 06 November 2022
            </div>
            <div className='text-center w-[300px] text-[#226b4b] px-4 py-2 mx-auto mt-4 border border-primary rounded-md'>
              <div className='text-sm italic'>Kepada :</div>
              <div className='font-semibold'>M. Ali Shodikin, S.Kom</div>
              <div className='text-sm italic'>di Surabaya</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover2In;
