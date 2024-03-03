'use client';

import { ChangeEvent, useState } from 'react';

import { Input } from '@/components/common';

import BottomSheet from './components/BottomSheet';
import List from './components/List';
import { Music } from './components/ListItem';

// @todo: api로 받아오기
const musicList_MOCK: Music[] = [
  {
    id: '1',
    musicTitle: 'musicTitle',
    artist: 'aespa',
    albumTitle: 'MY WORLD - The 3rd Mini Album',
    thumbnailUrl:
      'https://yt3.ggpht.com/aMEvgk3HpePuKHEb72ZLb0RHnq4oZc9JoLZP2SiIoC8VJmGGSvChE7GtNRY3twnlhQ1nMMsX_g=s88-c-k-c0x00ffffff-no-rj',
    audioUrl: 'https://www.youtube.com/watch?v=WM7S317ebLM',
    musicId: 'hIoKUSDbapY',
  },
  {
    id: '2',
    musicTitle: '크리스마수',
    artist: 'NCT Dream',
    albumTitle: 'Beatbox - The 2nd Album Repackage',
    thumbnailUrl:
      'https://yt3.ggpht.com/aMEvgk3HpePuKHEb72ZLb0RHnq4oZc9JoLZP2SiIoC8VJmGGSvChE7GtNRY3twnlhQ1nMMsX_g=s88-c-k-c0x00ffffff-no-rj',
    audioUrl: 'https://www.youtube.com/watch?v=WM7S317ebLM',
    musicId: '98kjNRfADKw',
  },
  {
    id: '3',
    musicTitle: '르세라핌1',
    artist: 'NCT Dream',
    albumTitle: 'Beatbox - The 2nd Album Repackage',
    thumbnailUrl:
      'https://yt3.ggpht.com/aMEvgk3HpePuKHEb72ZLb0RHnq4oZc9JoLZP2SiIoC8VJmGGSvChE7GtNRY3twnlhQ1nMMsX_g=s88-c-k-c0x00ffffff-no-rj',
    audioUrl: 'https://www.youtube.com/watch?v=WM7S317ebLM',
    musicId: 'SPNJgjqqUnI',
  },
  {
    id: '4',
    musicTitle: '르세라핌2',
    artist: 'NCT Dream',
    albumTitle: 'Beatbox - The 2nd Album Repackage',
    thumbnailUrl:
      'https://yt3.ggpht.com/aMEvgk3HpePuKHEb72ZLb0RHnq4oZc9JoLZP2SiIoC8VJmGGSvChE7GtNRY3twnlhQ1nMMsX_g=s88-c-k-c0x00ffffff-no-rj',
    audioUrl: 'https://www.youtube.com/watch?v=WM7S317ebLM',
    musicId: 'wERAXKNizk4',
  },
];

export default function Search() {
  const [selectMusic, setSelectMusic] = useState<Music | null>(null);
  const [query, setQuery] = useState<string>('');

  const onListItemClick = (music: Music) => {
    setSelectMusic(music);
  };

  const onBottomSheetClose = () => {
    setSelectMusic(null);
  };

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="px-4 border-border">
        <Input placeholder="노래, 아티스트, 앨범명 등을 검색하세요." value={query} onChange={onQueryChange} />

        <div className="w-full py-[15px]">
          <p className="text-[12px]/[140%] text-white-a40">최근 찾은 노래</p>
        </div>

        <List musicList={musicList_MOCK} onListItemClick={onListItemClick} />
      </div>
      <BottomSheet selectMusic={selectMusic} onClose={onBottomSheetClose} />
    </>
  );
}
