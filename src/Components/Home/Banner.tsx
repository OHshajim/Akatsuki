import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-black py-5">
      <div className="flex overflow-hidden space-x-0 text-nowrap text-xl xl:text-2xl font-bold uppercase pb-5 text-[#E3962B]">
        <div className="flex animate-loop-scroll gap-2 ">
          <p> / One Piece</p>
          <p> / Naruto</p>
          <p> / Demon Slayer: Kimetsu no Yaiba</p>
          <p> / Attack on Titan</p>
          <p> / My Hero Academia</p>
          <p> / Death Note</p>
          <p> / Fullmetal Alchemist: Brotherhood</p>
          <p> / Sword Art Online</p>
          <p> / Hunter x Hunter </p>
          <p> / Tokyo Ghoul</p>
          <p> / Jujutsu Kaisen</p>
          <p> / Your Name</p>
          <p> / Suzume</p>
          <p> / One Punch Man</p>
          <p> / Re:Zero - Starting Life in Another World</p>
          <p> / Fairy Tail</p>
          <p> / Mob Psycho 100</p>
          <p> / Code Geass</p>
          <p> / Spirited Away</p>
          <p> / Neon Genesis Evangelion</p>
        </div>
        <div className="flex animate-loop-scroll gap-2 " aria-hidden="true">
          <p> / One Piece</p>
          <p> / Naruto</p>
          <p> / Demon Slayer: Kimetsu no Yaiba</p>
          <p> / Attack on Titan</p>
          <p> / My Hero Academia</p>
          <p> / Death Note</p>
          <p> / Fullmetal Alchemist: Brotherhood</p>
          <p> / Sword Art Online</p>
          <p> / Hunter x Hunter </p>
          <p> / Tokyo Ghoul</p>
          <p> / Jujutsu Kaisen</p>
          <p> / Your Name</p>
          <p> / Suzume</p>
          <p> / One Punch Man</p>
          <p> / Re:Zero - Starting Life in Another World</p>
          <p> / Fairy Tail</p>
          <p> / Mob Psycho 100</p>
          <p> / Code Geass</p>
          <p> / Spirited Away</p>
          <p> / Neon Genesis Evangelion</p>
        </div>
      </div>
      <Image
        width={4000}
        height={2000}
        src="https://i.ibb.co.com/874fbVC/152-2-1-shaded-copyright.jpg"
        alt=""
        className="w-full h-auto object-cover"
      />
      <div className="w-full h-full ">
        <div className="flex justify-start items-end w-full h-full">
          <div className="px-5 lg:px-20 text-center lg:text-left font-bold py-4">
            <h4 className="lg:text-2xl md:text-xl text-xs text-white">
              Join The community of All-time japanese classics
            </h4>
            <h1 className="text-xl lg:text-3xl xl:text-9xl text-[#E3962B] lg:my-5">
              Welcome to Akatsuki
            </h1>
            <p className="text-white text-sm text-[5px] uppercase">
              Anime Culture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
