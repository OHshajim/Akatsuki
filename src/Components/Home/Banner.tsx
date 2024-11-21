import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-[#000000f5] py-5">
      <div className="flex overflow-hidden space-x-0 text-nowrap text-xl xl:text-2xl font-bold pb-5 text-[#E3962B]">
        <div className="flex animate-loop-scroll gap-2 ">
          <p className="font-primary"> / One Piece</p>
          <p className="font-primary"> / Naruto</p>
          <p className="font-primary"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="font-primary"> / Attack on Titan</p>
          <p className="font-primary"> / My Hero Academia</p>
          <p className="font-primary"> / Death Note</p>
          <p className="font-primary"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="font-primary"> / Sword Art Online</p>
          <p className="font-primary"> / Hunter x Hunter </p>
          <p className="font-primary"> / Tokyo Ghoul</p>
          <p className="font-primary"> / Jujutsu Kaisen</p>
          <p className="font-primary"> / Your Name</p>
          <p className="font-primary"> / Suzume</p>
          <p className="font-primary"> / One Punch Man</p>
          <p className="font-primary">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="font-primary"> / Fairy Tail</p>
          <p className="font-primary"> / Mob Psycho 100</p>
          <p className="font-primary"> / Code Geass</p>
          <p className="font-primary"> / Spirited Away</p>
          <p className="font-primary"> / Neon Genesis Evangelion</p>
        </div>
        <div className="flex animate-loop-scroll gap-2 " aria-hidden="true">
          <p className="font-primary"> / One Piece</p>
          <p className="font-primary"> / Naruto</p>
          <p className="font-primary"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="font-primary"> / Attack on Titan</p>
          <p className="font-primary"> / My Hero Academia</p>
          <p className="font-primary"> / Death Note</p>
          <p className="font-primary"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="font-primary"> / Sword Art Online</p>
          <p className="font-primary"> / Hunter x Hunter </p>
          <p className="font-primary"> / Tokyo Ghoul</p>
          <p className="font-primary"> / Jujutsu Kaisen</p>
          <p className="font-primary"> / Your Name</p>
          <p className="font-primary"> / Suzume</p>
          <p className="font-primary"> / One Punch Man</p>
          <p className="font-primary">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="font-primary"> / Fairy Tail</p>
          <p className="font-primary"> / Mob Psycho 100</p>
          <p className="font-primary"> / Code Geass</p>
          <p className="font-primary"> / Spirited Away</p>
          <p className="font-primary"> / Neon Genesis Evangelion</p>
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
            <h4 className="lg:text-3xl md:text-xl text-xs text-white font-primary tracking-[2px]">
              Join The community of All-time japanese classics
            </h4>
            <h1 className="text-xl lg:text-4xl xl:text-9xl text-[#E3962B] lg:my-5">
              Welcome to
              <span className="font-Secondary xl:text-8xl"> AKATSUKI</span>
            </h1>
            <p className="text-white lg:text-lg text-sm font-primary tracking-[2px]">
              Anime Culture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
