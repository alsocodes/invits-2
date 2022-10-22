import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import BottomNavbar from '../components/BottomNavbar';
import Couple from '../components/Couple';
import Cover2 from '../components/Cover2';
import Cover2In from '../components/Cover2In';
import CovidProtocol from '../components/CovidProtocol';
import Gallery from '../components/Gallery';
import GuestBook from '../components/GuestBook';
import Landing from '../components/layout/Landing';
import Location from '../components/Location';
import LoveStory from '../components/LoveStory';
import SaveTheDate from '../components/SaveTheDate';
import { useRouter } from 'next/router';
import { apiCall } from '../lib/helper';

const Home: NextPage = () => {
  const router = useRouter();
  const { guest } = router.query;
  const [guestData, setGuestData] = useState(null);
  const [messages, setMessages] = useState(null);

  const getGuest = (guestId) => {
    fetch(`/api/guest/${guestId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) setGuestData(data?.data);
      });
  };

  const getAllMessages = () => {
    fetch(`/api/messages`)
      .then((res) => res.json())
      .then((data) => {
        console.log('xna data xx', data?.data);
        if (data?.success) setMessages(data?.data);
      });
  };

  useEffect(() => {
    if (guest) {
      getGuest(guest);
      console.log('xna getting guest');
    }
  }, [guest]);

  useEffect(() => {
    getAllMessages();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(true);

  const player = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!player.current.paused);
    if (player.current.paused) {
      player.current.play();
    } else {
      player.current.pause();
    }
  };
  const bukaUndangan = () => {
    setIsPlaying(!player.current.paused);
    player.current.play();
    const div = document.getElementById('the-home');

    if (div) {
      setTimeout(() => {
        window.scrollTo({
          top: div.offsetTop,
          behavior: 'smooth',
        });
        // setHideCover(true);
      }, 100);

      setTimeout(() => {
        //@ts-ignore:next-line
        if (document.activeElement) document.activeElement.blur();
      }, 100);
    }
  };

  const [activeMenu, setActiveMenu] = useState('the-home');
  const navigationAction = (to) => {
    const div = document.getElementById(to);
    setActiveMenu(to);
    if (div) {
      setTimeout(() => {
        window.scrollTo({
          top: div.offsetTop,
          behavior: 'smooth',
        });
      }, 100);

      setTimeout(() => {
        //@ts-ignore:next-line
        if (document.activeElement) document.activeElement.blur();
      }, 100);
    }
  };

  useEffect(() => {
    const sections = [
      document.getElementById('the-home'),
      document.getElementById('the-couple'),
      document.getElementById('the-date'),
      document.getElementById('the-gallery'),
      document.getElementById('the-book'),
    ];
    const handleScroll = (event) => {
      // console.log('window.scrollY', window.scrollY);
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      // for (let i = 0; i < sections.length; i++) {
      //   const section = sections[i];
      //   if (section.offsetTop <= scrollPosition * 1.7) {
      //     console.log('xna-aaa', section?.id);
      //   }
      // }
      const inframes = sections.filter(
        (a) => a.offsetTop <= scrollPosition * 1.7,
        []
      );
      // console.log('xna-aa', inframes[inframes?.length - 1]?.id);
      // setActiveMenu(inframes[inframes?.length - 1]?.id);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Landing
      data={{
        title: 'The Wedding Of Vega & Firdaus - Invits',
      }}
    >
      {/* <div className={`h-screen w-full ${!isOpen && 'overflow-hidden'}`}> */}
      <div className={`h-screen w-full ${!isOpen && 'overflow-hidden'}`}>
        <Cover2
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          bukaUndangan={bukaUndangan}
        />
        <Cover2In guestData={guestData} />
        <Couple />
        <SaveTheDate />
        <CovidProtocol />
        <Gallery />
        <LoveStory />
        <GuestBook
          guestData={guestData}
          messages={messages}
          getAllMessages={getAllMessages}
        />
        <Location />
        <div className='absolute -left-[1000px]'>
          <audio
            ref={player}
            loop
            controls
            src='/images/music.mp3'
            // type='audio/mpeg'
          />
        </div>
        <div className='w-full h-20'></div>
        <BottomNavbar
          isOpen={isOpen}
          navigationAction={navigationAction}
          activeMenu={activeMenu}
        />
        <div className='relative'>
          <button
            className='btn btn-outline btn-sm m-2 fixed left-0 bottom-16'
            onClick={() => togglePlay()}
          >
            {!isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    </Landing>
  );
};

export default Home;
