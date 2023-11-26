export default function Cd({ src }: { src: string }) {
  return (
    <div className="flex justify-center items-center mb-4">
      <div className="absolute flex items-center justify-center">
        <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx={24} cy={24} r={24} fill="#101012" />
        </svg>
      </div>
      <img className="flex-shrink-0 w-52 h-52 border rounded-full border-white-a20" src={src} />
    </div>
  );
}
