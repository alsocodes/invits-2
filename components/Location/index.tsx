import React from 'react';
import { FaDirections } from 'react-icons/fa';

const Location = () => {
  return (
    <div className='' data-aos='zoo-in' data-aos-duration='500'>
      <div
        style={{
          border: '1px solid #ddd',
          padding: '0px',
          borderRadius: '10px',
        }}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.958323967885!2d112.76019439999999!3d-7.2455833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45c66b1365688b73!2zN8KwMTQnNDQuMSJTIDExMsKwNDUnMzYuNyJF!5e0!3m2!1sen!2sid!4v1666374260470!5m2!1sen!2sid'
          width='100%'
          height='350'
          style={{ border: '0' }}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
      <div className='flex justify-center'>
        <a
          href='https://goo.gl/maps/ZFfcH8d7EG9sdMCD7'
          target='_blank'
          rel='noreferrer'
        >
          <button className='btn btn-primary text-white m-4'>
            <FaDirections className='mr-2' /> Petunjuk Arah
          </button>
        </a>
      </div>
    </div>
  );
};

export default Location;
