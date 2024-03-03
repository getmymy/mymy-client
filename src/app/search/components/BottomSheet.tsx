'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { YouTubeEvent } from 'react-youtube';

import { AnimatePresence, motion } from 'framer-motion';

import VolumeOff from '@/components/icon/VolumeOff';
import VolumeOn from '@/components/icon/VolumeOn';
import { Button } from '@/components/ui';

import Cd from './Cd';
import { Music } from './ListItem';
import YoutubePlayer from './YoutubePlayer';

export default function BottomSheet({ selectMusic, onClose }: { selectMusic: Music | null; onClose: () => void }) {
  const eventRef = useRef<YouTubeEvent>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!selectMusic) {
      setIsPlaying(false);
    }
  }, [selectMusic]);

  const playMusic = () => {
    eventRef.current?.target.playVideo();
  };

  const pauseMusic = () => {
    eventRef.current?.target.pauseVideo();
  };

  const onMusicClick = () => {
    if (isPlaying) {
      pauseMusic();
      setIsPlaying(false);
    } else {
      playMusic();
      setIsPlaying(true);
    }
  };

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {selectMusic && (
        <div className="absolute h-full w-full top-0 overflow-hidden">
          {/* 백그라운드 컴포넌트  */}
          <div className="h-full w-full absolute top-0" onClick={onClose}></div>

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="flex-shrink-0 pt-5 px-5 w-full rounded-t-[30px] bg-white-a10 absolute bottom-0 backdrop-blur-md"
          >
            <div className="flex justify-between">
              <button onClick={onClose} className=" text-white  font-medium leading-[140%]">
                취소
              </button>
              <button
                onClick={onMusicClick}
                className="flex items-center justify-center w-[32px] h-[32px] bg-white-a20 rounded-full"
              >
                {isPlaying ? <VolumeOff /> : <VolumeOn />}
              </button>
            </div>

            <Cd src={selectMusic.thumbnailUrl} />

            {/* @todo: 타이포 컴포넌트로 변경 */}
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

            {/* @todo: button 컴포넌트 업데이트 반영 */}
            <Button className="my-[1.25rem]">Share</Button>
          </motion.div>
          <YoutubePlayer ref={eventRef} youtubeId={selectMusic.musicId} />
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
