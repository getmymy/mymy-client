import { Button } from '@/components/ui';

import { Music } from './ListItem';

export default function BottomSheet({ selectMusic }: { selectMusic: Music }) {
  return (
    <div className="flex-shrink-0 pt-5 px-5 w-full rounded-t-[30px] bg-white-a10 absolute bottom-0">
      <button className=" text-white  font-medium leading-[140%]">취소</button>

      <div className="flex justify-center mb-4">
        <img className="flex-shrink-0 w-52 h-52 border rounded-full border-white-a20" src={selectMusic.thumbnailUrl} />
      </div>

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
    </div>
  );
}
