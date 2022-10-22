import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Drawer from '../../Drawer';

const Dashboard = (props: any) => {
  const { children, data } = props;
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <title>{data?.title} </title>
        <link
          rel='shortcut icon'
          href='assets/images/favicon.png'
          type='image/x-icon'
        />
      </Head>
      <main className='bg-base-100'>
        {/* <div className="w-full bg-gray-300 h-2.5 mb-4 absolute bottom-0 left-0 right-0">
          <div
            className="bg-primary h-2.5 rounded-sm"
            style={{ width: '45%' }}
          ></div>
        </div> */}
        <div className='drawer drawer-mobile'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col items-center justify-center'>
            <div className='navbar bg-primary'>
              <div className='flex-none'>
                <label
                  className='btn btn-square btn-ghost md:hidden'
                  htmlFor='my-drawer-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-5 h-5 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
            {children}
          </div>
          <div className='drawer-side'>
            <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
            <ul className='menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content -mt-4'>
              {/* <h2>Invits</h2> */}
              <div className='z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex '>
                <a
                  href='/dashboard'
                  aria-current='page'
                  aria-label='Homepage'
                  className='flex-0 btn btn-ghost px-2'
                >
                  <div className='font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl'>
                    <span className='capitalize text-primary'>Invits</span>{' '}
                    {/* <span className='text-base-content uppercase'></span> */}
                  </div>
                </a>{' '}
                <a
                  href='/docs/changelog'
                  className='link link-hover font-mono text-xs text-opacity-50'
                >
                  <div data-tip='Changelog' className='tooltip tooltip-bottom'>
                    Dashboard
                  </div>
                </a>
              </div>
              <li className='mt-4'>
                <Link href={'/dashboard'}>
                  <a className={data?.menuActive === 'dashboard' && 'active'}>
                    Dashbaord
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/tamu'}>
                  <a className={data?.menuActive === 'tamu' && 'active'}>
                    Daftar Tamu
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/dashboard/buku-tamu'}>
                  <a className={data?.menuActive === 'buku-tamu' && 'active'}>
                    Buku Tamu
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href={'/dashboard/template'}>
                  <a className={data?.menuActive === 'template' && 'active'}>
                    Template
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
