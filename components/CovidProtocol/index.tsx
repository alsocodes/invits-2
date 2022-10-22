import Image from 'next/image';
import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { CopyMe } from '../../lib/helper';

const CovidProtocol = () => {
  return (
    <div className='px-4 py-16 md:py-24 bg-primary relative min-h-screen'>
      <div className='md:w-[500px] mx-auto  text-base-100 '>
        <div data-aos='fade-down' data-aos-duration='500'>
          <div
            className='text-center text-3xl font-semibold text-white'
            style={{ fontFamily: 'Dancing Script' }}
          >
            Amplop Digital
          </div>
          <div className='text-center py-4 mb-4'>
            Doa Restu Anda merupakan karunia yang sangat berarti bagi Kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda. Anda dapat memberi
            kado secara Cashless
          </div>
          <div className='text-center'>Silakan transder ke rekening BCA :</div>
          <div className='flex justify-center gap-6 items-center'>
            <div className='my-2 flex justify-center'>
              <div className='w-[120px] h-[36px] relative'>
                <Image
                  src={'/images/logo-bca.png'}
                  layout='fill'
                  objectFit='cover'
                  alt='logo-bca'
                />
              </div>
            </div>
            <div>
              Vega Dwi P <br />
              <span className='text-lg font-semibold'>1011368684</span>
            </div>
          </div>
          <div className='flex justify-center my-2'>
            <button
              onClick={() => CopyMe('1011368684')}
              className='btn btn-sm btn-info text-white self-center'
            >
              <FaCopy className='mr-2' />
              Copy Rekening
            </button>
          </div>
        </div>
        <div className='border-t border-base-100 my-12'></div>
        <div data-aos='fade-up' data-aos-duration='500'>
          <div
            className='text-center text-3xl font-semibold text-white'
            style={{ fontFamily: 'Dancing Script' }}
          >
            Protocol Covid-19
          </div>
          <div>
            <div className='py-4 mb-4 text-center'>
              Acara ini diselenggarakan sesuai dengan Protocol Covid-19,
              diharapkan para tamu undangan untuk :
            </div>
            <div className='flex gap-6 md:gap-12 justify-center text-base-100 w-full bordxer border-red-400 mb-6 md:mb-12 text-sm'>
              <div className='w-[160px] text-center border border-base-100 p-2 rounded-sm'>
                <Image
                  src={'/images/masker.png'}
                  width='100'
                  height='100'
                  alt='masker'
                />
                <div>Membawa Memakai Masker</div>
              </div>
              <div className='w-[160px] text-center border border-base-100 p-2 rounded-sm'>
                <Image
                  src={'/images/cuci-tangan.png'}
                  width='100'
                  height='100'
                  alt='wash'
                />
                <div>Cuci tangan dengan sabun/handsanitizer</div>
              </div>
            </div>
            <div className='flex gap-6 md:gap-12 justify-center text-base-100 w-full bordxer border-red-400'>
              <div className='w-[160px] text-center  border border-base-100 p-2 rounded-sm'>
                <Image
                  src={'/images/distance.png'}
                  width='100'
                  height='100'
                  alt='distance'
                />
                <div>Jaga jarak aman selama acara</div>
              </div>
              <div className='w-[160px] text-center  border border-base-100 p-2 rounded-sm'>
                <Image
                  src={'/images/salam.png'}
                  width='100'
                  height='100'
                  alt='salam'
                />
                <div>Tidak berjabat tangan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidProtocol;
