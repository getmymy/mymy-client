import { Input } from '@/components/ui';

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
  },
  {
    id: '2',
    musicTitle: 'Beat Box',
    artist: 'NCT Dream',
    albumTitle: 'Beatbox - The 2nd Album Repackage',
    thumbnailUrl:
      'https://yt3.ggpht.com/aMEvgk3HpePuKHEb72ZLb0RHnq4oZc9JoLZP2SiIoC8VJmGGSvChE7GtNRY3twnlhQ1nMMsX_g=s88-c-k-c0x00ffffff-no-rj',
    audioUrl: 'https://www.youtube.com/watch?v=WM7S317ebLM',
  },
];

export default function Search() {
  return (
    <>
      <div className="px-4 border-border">
        <Input placeholder="노래, 아티스트, 앨범명 등을 검색하세요." />

        <div className="w-full py-[15px]">
          <p className="text-[12px]/[140%] text-white-a40">최근 찾은 노래</p>
        </div>

        <List musicList={musicList_MOCK} />
      </div>
      <BottomSheet selectMusic={musicList_MOCK[0]} />
    </>
  );
}
