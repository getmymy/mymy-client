import Image from 'next/image';

export default function Cd({ src, size = 'm' }: { src: string; size?: 's' | 'm' }) {
  const cdSize = size === 's' ? 48 : 232;
  const cdSizeClass = size === 's' ? `w-[${cdSize}px] h-[${cdSize}px]` : `w-[${cdSize}px] h-[${cdSize}px]`;
  const holeSizeClass = size === 's' ? 'w-[12px] h-[12px]' : 'w-[59px] h-[59px]';

  return (
    <>
      <div className="flex justify-center items-center mb-4">
        {src ? (
          <Image alt="" width={cdSize} height={cdSize} className="rounded-full" src={src} />
        ) : (
          <div className={`${cdSizeClass} bg-white-a4 w-[232px] h-[232px] rounded-full`}></div>
        )}
        <div className={`${cdSizeClass} absolute border border-white-a40 rounded-full`}></div>
        <div className={`${holeSizeClass} absolute box-contents border border-white-a40 rounded-full bg-black`}></div>
      </div>
    </>
  );
}
