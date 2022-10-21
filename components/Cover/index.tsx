import Image from 'next/image';
import React from 'react';
import styles from './Cover.module.css';

const Cover = () => {
  return (
    <div className='w-full h-screen p-4 overflow-hidden relative'>
      <div className='w-full h-full'>
        <div
          className='
          w-[430px] h-[430px]
          rounded-full 
          absolute bottom-8 -left-2
          overflow-hidden
          z-0
          '
        >
          <Image
            src={'/images/cover-1.png'}
            layout='fill'
            objectFit='cover'
            alt='cover'
          />
        </div>
        <div
          className={`absolute bottom-16 left-0 right-0 
          ${styles.grad1} z-10 w-full h-72`}
        >
          <div className='w-full h-full'>
            <div className='absolute bottom-0 p-4'>
              <div className='text-gray-100'>The Wedding Of</div>
              <div className='text-gray-200 text-5xl mb-1'>Vega & Firdaus</div>
              <div className='text-gray-300 text-sm'>
                Minggu, 06 Novembeer 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
