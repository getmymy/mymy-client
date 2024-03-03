import Image from 'next/image';

export default function Cd({ src }: { src: string }) {
  return (
    <>
      <svg
        className="absolute"
        width="232"
        height="232"
        viewBox="0 0 232 232"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask">
          <path
            opacity="0.9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M116 232C180.065 232 232 180.065 232 116C232 51.935 180.065 0 116 0C51.935 0 0 51.935 0 116C0 180.065 51.935 232 116 232ZM117 145C132.464 145 145 132.464 145 117C145 101.536 132.464 89 117 89C101.536 89 89 101.536 89 117C89 132.464 101.536 145 117 145Z"
            fill="#FFFFFF"
          />
        </mask>
      </svg>

      <div className="flex justify-center items-center mb-4">
        <Image
          alt=""
          width={232}
          height={232}
          style={{
            maskImage: 'url(#mask)',
            WebkitMaskImage: 'url(#mask)',
          }}
          src={src}
        />
      </div>
    </>
  );
}
