import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";

const Team = () => {
  const team = [
    {
      id: 1,
      role: "Motion Designer",
      name: "Lucy Gilmore",
      image: "https://i.ibb.co.com/xY5W125/team1.jpg",
    },
    {
      id: 2,
      role: "Art Director",
      name: "Kate Barnes",
      image: "https://i.ibb.co.com/XyGsnTG/team2.jpg",
    },
    {
      id: 3,
      role: "Manga Artist",
      name: "Anna Woods",
      image: "https://i.ibb.co.com/gttStP3/team3.jpg",
    },
    {
      id: 4,
      role: "Anime Artist",
      name: "Natalie Jones",
      image: "https://i.ibb.co.com/VMsMRXj/team4.jpg",
    },
    {
      id: 5,
      role: "Costume Designer",
      name: "Jenny Sanders",
      image: "https://i.ibb.co.com/8zj8Qqn/team5.jpg",
    },
    {
      id: 6,
      role: "Sales Advisor",
      name: "Amy Walker",
      image: "https://i.ibb.co.com/PwKBNDt/team6.jpg",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 ">
        <SectionTitle subHeading={"Our Team"} heading={"Meet with Us"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
          {team.map((member) => (
            <div className="card rounded-none text-black group" key={member.id}>
              <figure className="overflow-hidden">
                <Image
                  width={600}
                  height={800}
                  src={member.image}
                  alt="member"
                  className="w-full h-auto object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
                />
              </figure>
              <div className="card-body flex-row items-center justify-between  py-4 px-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="card-title group-hover:text-[#E3962B] transition-colors duration-300 bebas-neue tracking-[2px] text-lg md:text-xl lg:text-2xl">
                  {member.name}
                </h2>
                <h3 className="font-semibold text-zinc-500 opacity-0 group-hover:text-zinc-700 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 pr-2">
                  {member.role}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex overflow-hidden space-x-0 text-nowrap text-5xl xl:text-9xl font-bold uppercase pb-5 text-[#cdcdcd66]">
        <div className="flex animate-loop-scroll gap-2 ">
          {team.map((member) => (
            <p key={member.id} className="bebas-neue">
              / {member.name} - {member.role} /
            </p>
          ))}
        </div>
        <div className="flex animate-loop-scroll gap-2 " aria-hidden="true">
          {team.map((member) => (
            <p key={member.id} className="bebas-neue">
              / {member.name} - {member.role} /
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
