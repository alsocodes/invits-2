import Head from 'next/head';
import React from 'react';

const Landing = (props: any) => {
  const { children, data } = props;
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Marcellus&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Dancing+Script&family=Marcellus&display=swap'
          rel='stylesheet'
        />

        <title>{data?.title} </title>
        <link
          rel='shortcut icon'
          href='assets/images/favicon.png'
          type='image/x-icon'
        />
      </Head>
      <main className='bg-base-100'>{children}</main>
    </div>
  );
};

export default Landing;
