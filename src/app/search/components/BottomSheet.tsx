'use client';

import { useRef } from 'react';
import { YouTubeEvent } from 'react-youtube';

import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui';

import Cd from './Cd';
import { Music } from './ListItem';
import YoutubePlayer from './YoutubePlayer';

export default function BottomSheet({ selectMusic, onClose }: { selectMusic: Music | null; onClose: () => void }) {
  const eventRef = useRef<YouTubeEvent>(null);

  const onClick = () => {
    eventRef.current?.target.playVideo();
  };

  return (
    <AnimatePresence>
      {selectMusic && (
        <>
          {/* 백그라운드 컴포넌트  */}
          <div className="h-full w-full absolute top-0 z-0" onClick={onClose}></div>

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="flex-shrink-0 pt-5 px-5 w-full rounded-t-[30px] bg-white-a10 absolute bottom-0 z-10 backdrop-blur-md"
          >
            <button onClick={onClick} className=" text-white  font-medium leading-[140%]">
              취소
            </button>

            <Cd src={selectMusic.thumbnailUrl} />

            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="text-white text-2xl font-bold leading-[140%]">{selectMusic.musicTitle}</div>

                <div className="flex items-start gap-1">
                  <div className="text-white-a60 font-medium leading-[140%]">{selectMusic.artist}</div>
                  <div className="text-white-a20 text-center text-xs font-medium leading-[140%]">|</div>
                  <div className="text-white-a60 font-medium leading-[140%]">{selectMusic.albumTitle}</div>
                </div>
              </div>
            </div>

            <Button className="my-[1.25rem]">Share</Button>
          </motion.div>
          <YoutubePlayer ref={eventRef} youtubeId={selectMusic.musicId} />
        </>
      )}
    </AnimatePresence>
  );
}
