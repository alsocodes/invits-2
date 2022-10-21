import Image from 'next/image';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [gallery, setGallery] = useState(-1);
  const onPrev = () => {
    setGallery(gallery === 0 ? galleries?.length - 1 : gallery - 1);
  };
  const onNext = () => {
    setGallery(gallery === galleries?.length - 1 ? 0 : gallery + 1);
  };
  const galleries = [
    {
      title: 'foto-gallery-1',
      image: '/images/gallery/gal-1.jpeg',
      imageFull: '/images/gallery/gal-1.jpeg',
    },
    {
      title: 'foto-gallery-2',
      image: '/images/gallery/gal-2.jpeg',
      imageFull: '/images/gallery/gal-2.jpeg',
    },
    {
      title: 'foto-gallery-3',
      image: '/images/gallery/gal-3.jpeg',
      imageFull: '/images/gallery/gal-3.jpeg',
    },
    {
      title: 'foto-gallery-4',
      image: '/images/gallery/gal-4.jpeg',
      imageFull: '/images/gallery/gal-4.jpeg',
    },
    {
      title: 'foto-gallery-5',
      image: '/images/gallery/gal-5.jpeg',
      imageFull: '/images/gallery/gal-5.jpeg',
    },
    {
      title: 'foto-gallery-6',
      image: '/images/gallery/gal-6.jpeg',
      imageFull: '/images/gallery/gal-6.jpeg',
    },
  ];
  return (
    <div className='px-4 py-16 md:py-24 relative w-full overflow-hidden'>
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
      <div className='md:w-[768px] mx-auto text-[#226b4b]'>
        <div
          data-aos='fade-down'
          data-aos-duration='500'
          className='text-center text-3xl font-semibold mb-6'
          style={{ fontFamily: 'Dancing Script' }}
        >
          Photo Galery
        </div>
        <input
          type='checkbox'
          id='my-modal-4'
          className='modal-toggle'
          checked={gallery > -1}
        />
        <label
          htmlFor='my-modal-4'
          className='modal bg-opacity-80 cursor-pointer'
        >
          <div className='w-full h-full p-10 relative'>
            <div className='-mt-10 -mx-5 flex justify-between  text-white'>
              <div className='text-xl p-2'>
                {gallery + 1}/{galleries?.length}
              </div>
              <span
                className='btn btn-ghost btn-circle'
                onClick={() => setGallery(-1)}
              >
                <FaTimes />
              </span>
            </div>
            <div className='w-full h-full md:max-w-[980px] md:mx-auto'>
              <div className='w-full h-full'>
                <div className='absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <span onClick={() => onPrev()} className='btn btn-circle'>
                    ❮
                  </span>
                  <span onClick={() => onNext()} className='btn btn-circle'>
                    ❯
                  </span>
                </div>
                <div className='relative w-full h-full'>
                  <Image
                    src={galleries[gallery]?.imageFull}
                    alt={galleries[gallery]?.title}
                    layout='fill'
                    objectFit='contain'
                    className='transition-all duration-300'
                  />
                </div>
              </div>
            </div>
          </div>
        </label>
        <div className='flex flex-wrap -m-1 md:-m-2'>
          {galleries?.map((a, i) => {
            return (
              <div className='flex flex-wrap w-1/2 sm:w-1/3' key={a?.title}>
                <div
                  className='w-full p-2 md:p-4 h-eqw'
                  data-aos='zoom-in'
                  data-aos-delay='500'
                >
                  <div
                    onClick={() => setGallery(i)}
                    className='relative w-full h-full group cursor-pointer overflow-hidden rounded-lg'
                  >
                    <Image
                      src={a?.image}
                      alt={a?.title}
                      width={300}
                      height={300}
                      layout='responsive'
                      objectFit='cover'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
