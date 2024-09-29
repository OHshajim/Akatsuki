import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#000000f5] py-5">
      <div className="flex overflow-hidden space-x-0 text-nowrap text-xl xl:text-2xl font-bold uppercase pb-5 text-[#E3962B]">
        <div className="flex animate-loop-scroll gap-2 ">
          <p className="bebas-neue"> / One Piece</p>
          <p className="bebas-neue"> / Naruto</p>
          <p className="bebas-neue"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="bebas-neue"> / Attack on Titan</p>
          <p className="bebas-neue"> / My Hero Academia</p>
          <p className="bebas-neue"> / Death Note</p>
          <p className="bebas-neue"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="bebas-neue"> / Sword Art Online</p>
          <p className="bebas-neue"> / Hunter x Hunter </p>
          <p className="bebas-neue"> / Tokyo Ghoul</p>
          <p className="bebas-neue"> / Jujutsu Kaisen</p>
          <p className="bebas-neue"> / Your Name</p>
          <p className="bebas-neue"> / Suzume</p>
          <p className="bebas-neue"> / One Punch Man</p>
          <p className="bebas-neue">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="bebas-neue"> / Fairy Tail</p>
          <p className="bebas-neue"> / Mob Psycho 100</p>
          <p className="bebas-neue"> / Code Geass</p>
          <p className="bebas-neue"> / Spirited Away</p>
          <p className="bebas-neue"> / Neon Genesis Evangelion</p>
        </div>
        <div className="flex animate-loop-scroll gap-2 " aria-hidden="true">
          <p className="bebas-neue"> / One Piece</p>
          <p className="bebas-neue"> / Naruto</p>
          <p className="bebas-neue"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="bebas-neue"> / Attack on Titan</p>
          <p className="bebas-neue"> / My Hero Academia</p>
          <p className="bebas-neue"> / Death Note</p>
          <p className="bebas-neue"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="bebas-neue"> / Sword Art Online</p>
          <p className="bebas-neue"> / Hunter x Hunter </p>
          <p className="bebas-neue"> / Tokyo Ghoul</p>
          <p className="bebas-neue"> / Jujutsu Kaisen</p>
          <p className="bebas-neue"> / Your Name</p>
          <p className="bebas-neue"> / Suzume</p>
          <p className="bebas-neue"> / One Punch Man</p>
          <p className="bebas-neue">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="bebas-neue"> / Fairy Tail</p>
          <p className="bebas-neue"> / Mob Psycho 100</p>
          <p className="bebas-neue"> / Code Geass</p>
          <p className="bebas-neue"> / Spirited Away</p>
          <p className="bebas-neue"> / Neon Genesis Evangelion</p>
        </div>
      </div>
      <Image
        width={4000}
        height={2000}
        src="https://i.ibb.co.com/874fbVC/152-2-1-shaded-copyright.jpg"
        alt="Banner"
        className="w-full h-auto object-cover"
        priority
      />
      <div className="w-full h-full ">
        <div className="flex justify-start items-end w-full h-full">
          <div className="px-5 lg:px-20 text-center lg:text-left font-bold py-4">
            <h4 className="lg:text-3xl md:text-xl text-xs text-white bebas-neue tracking-[2px]">
              Join The community of All-time japanese classics
            </h4>
            <h1 className="text-xl lg:text-4xl xl:text-9xl text-[#E3962B] lg:my-5">
              Welcome to <span className="font-peralta uppercase xl:text-8xl">Akatsuki</span>
            </h1>
            <p className="text-white lg:text-lg text-sm uppercase bebas-neue tracking-[2px]">
              Anime Culture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
