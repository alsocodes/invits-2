import type { NextPage } from 'next';
import { useState } from 'react';
import BottomNavbar from '../components/BottomNavbar';
import Couple from '../components/Couple';
import Cover from '../components/Cover';
import Cover2 from '../components/Cover2';
import Cover2In from '../components/Cover2In';
import CovidProtocol from '../components/CovidProtocol';
import Landing from '../components/layout/Landing';
import SaveTheDate from '../components/SaveTheDate';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Landing
      data={{
        title: 'Inviits',
      }}
    >
      <div className={`h-screen w-full ${!isOpen && 'overflow-hidden'}`}>
        <Cover2 setIsOpen={setIsOpen} isOpen={isOpen} />
        <Cover2In />
        <Couple />
        <SaveTheDate />
        <CovidProtocol />
        <div className='w-full h-20'></div>
        <BottomNavbar isOpen={isOpen} />
      </div>
    </Landing>
  );
};

export default Home;
