import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import BottomNavbar from '../components/BottomNavbar';
import Couple from '../components/Couple';
import Cover from '../components/Cover';
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
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  updateDoc,
  where,
} from '@firebase/firestore';
import { firestore } from '../lib/firebase';

const Home: NextPage = () => {
  const router = useRouter();
  const { guest } = router.query;
  const [guestData, setGuestData] = useState(null);

  const todosCollection = collection(firestore, '/guests');
  const getGuest = async () => {
    // const todosQuery = query(
    //   todosCollection
    //   // where('guestId', '==', 'alishodikin')
    //   // limit(10)
    // );
    // const querySnapshot = await getDocs(todosQuery);
    // const result: QueryDocumentSnapshot<DocumentData>[] = [];
    // // console.log('xna 11', querySnapshot);
    // querySnapshot.forEach((snapshot) => {
    //   result.push(snapshot);
    // });
    // setGuestData(result);

    const q = query(collection(firestore, 'invits2'));

    const querySnapshot = await getDocs(q);
    console.log('xna xna', querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  };

  useEffect(() => {
    if (guest) {
      getGuest();
    }
  }, [guest]);

  useEffect(() => {
    console.log('xna guest data', guestData);
  }, [guestData]);

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
    const div = document.getElementById('cover-in');

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

  return (
    <Landing
      data={{
        title: 'Inviits',
      }}
    >
      {/* <div className={`h-screen w-full ${!isOpen && 'overflow-hidden'}`}> */}
      <div className={`h-screen w-full ${!isOpen && 'overflow-hidden'}`}>
        {guest}
        <Cover2
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          bukaUndangan={bukaUndangan}
        />
        <Cover2In />
        <Couple />
        <SaveTheDate />
        <CovidProtocol />
        <Gallery />
        <LoveStory />
        <GuestBook />
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
        <BottomNavbar isOpen={isOpen} />
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
