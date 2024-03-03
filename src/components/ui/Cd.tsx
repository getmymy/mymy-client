import Image from 'next/image';

export default function Cd({ src }: { src: string }) {
  return (
    <>
      <div className="flex justify-center items-center mb-4">
        {src ? (
          <Image alt="" width={232} height={232} className="rounded-full" src={src} />
        ) : (
          <div className="bg-white-a4 w-[232px] h-[232px] rounded-full"></div>
        )}
        <div className="w-[232px] h-[232px] absolute border border-white-a40 rounded-full"></div>
        <div className="w-[59px] h-[59px] absolute box-contents border border-white-a40 rounded-full bg-black"></div>
      </div>
    </>
  );
}
