export interface Music {
  id: string;
  musicTitle: string;
  artist: string;
  albumTitle: string;
  thumbnailUrl: string;
  audioUrl: string;
}
export default function ListItem({ music }: { music: Music }) {
  return (
    <button className="flex items-center gap-4 py-2  w-full">
      <img alt={''} src={music.thumbnailUrl} className="w-16 h-16 border border-[#ffffff]/[.20] rounded-full" />
      <div className="flex flex-col items-start gap-0.5">
        <div className="text-white-100  text-lg font-semibold leading-[140%]">{music.musicTitle}</div>
        <div className="flex items-start gap-1">
          <div className="text-white-a40  text-[.8125rem] font-medium leading-[140%] whitespace-nowrap">
            {music.artist}
          </div>
          <div className="text-white-a20 text-white text-center  text-xs font-medium leading-[140%]">|</div>
          <div className="text-white-a40 text-[.8125rem] font-medium leading-[140%] line-clamp-1 break-all">
            {music.albumTitle}
          </div>
        </div>
      </div>
    </button>
  );
}
