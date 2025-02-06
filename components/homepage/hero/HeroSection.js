import Image from 'next/image';

export default function HeroSection() {
  const imageStyle = {
    objectFit: 'cover',
    objectPosition: 'left',
  };
  return (
    <div className="w-full h-[80vh] flex items-center justify-center md:justify-end relative">
      <div className="w-full md:w-1/2 h-full relative">
        <Image
          src="/home/hero_section_placeholder.jpg"
          fill={true}
          alt=""
          style={imageStyle}
        />
        <div className="absolute bg-red-500 bottom-24 left-0 w-48 md:w-60 lg:w-80">
          Text
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full relative">
        <Image
          src="/home/hero_section_placeholder.jpg"
          fill={true}
          alt=""
          style={imageStyle}
        />
        <div className="absolute bg-red-500 bottom-24 left-0 w-48 md:w-60 lg:w-80">
          Text
        </div>
      </div>
    </div>
  );
}
