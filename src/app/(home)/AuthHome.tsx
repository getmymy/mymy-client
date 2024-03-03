'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui';

import Cd from '../search/components/Cd';

const music = {
  id: 'string',
  music_title: 'Spicy',
  artist: 'aespa',
  album_title: 'MY WORLD - The 3rd Mini Album',
  thumbnail_url: 'https://i1.sndcdn.com/artworks-1IH0LYhjgoRw-0-t500x500.jpg',
  reference_type: 'string',
  reference_id: 'string',
};
// const music = null;

const user = {
  nickname: '누가바',
  playlist_count: 3,
  feedback_count: 10234,
};

export const AuthHome = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4">
      <header className="flex w-full justify-between">
        <div>로고</div>
        <button className="bg-white-a10 w-[2rem] h-[2rem] flex justify-center items-center rounded-full">
          <Image src="/assets/ic_share.svg" alt="share" height={16} width={16} />
        </button>
      </header>

      <section className="flex flex-col justify-center items-center">
        {music ? (
          <>
            <div className="fixed h-[80%] w-full top-0 z-[-1] bg-gradient-to-b from-transparent to-black-100" />
            <div className="fixed h-[65%] w-full z-[-2] bg-gradient-to-b from-transparent to-black-100" />
            <div
              style={{ '--image-url': `url(${music.thumbnail_url})` } as React.CSSProperties}
              className="fixed h-[60%] w-full top-0 z-[-3] blur-lg bg-cover bg-center bg-[image:var(--image-url)]"
            />

            <Cd src={music.thumbnail_url ?? ''} />
            <h1 className="typo-title-20sb mb-[0.5rem]">{music.music_title}</h1>
            <p className="text-white-a60 typo-body-13m mb-[0.625rem]">
              {music.artist} | {music.album_title}
            </p>
            <Badge label="피드백" number={user.feedback_count} />
          </>
        ) : (
          <>
            <Cd src="" />
            <p className="text-white-a40 typo-body-16r mb-[0.625rem] whitespace-pre-line text-center">
              {`아직 공유한 음악이 없습니다.\n함께 듣고 싶은 음악을 공유해주세요.`}
            </p>
            <Image src="/assets/btn_share_music.png" alt="share button" width={153} height={36} />
          </>
        )}
      </section>

      <section className="relative flex flex-col gap-[1rem] overflow-hidden">
        <h2 className="typo-title-20sb max-h-[14.3125rem] line-clamp-2">{user.nickname}</h2>
        <div className="flex gap-[0.5rem]">
          <Badge label="플레이리스트" number={user.playlist_count} />
          <Badge label="피드백" number={user.feedback_count} />
        </div>
        <Image
          src="/assets/img_share_music.png"
          alt="share music"
          width={96}
          height={96}
          className="fixed z-[1] right-4 bottom-4 h-[96px] hover:rotate-6 transition-transform duration-100 ease-in-out cursor-pointer"
        />
      </section>
    </main>
  );
};
