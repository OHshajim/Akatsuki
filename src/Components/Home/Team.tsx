import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

const Team = () => {
  const team = [
    { id: 1, role: "Motion Designer", name: "Lucy Gilmore", image: "" },
    { id: 2, role: "Art Director", name: "Kate Barnes", image: "" },
    { id: 3, role: "Manga Artist", name: "Anna Woods", image: "" },
    { id: 4, role: "Anime Artist", name: "Natalie Jones", image: "" },
    { id: 5, role: "Costume Designer", name: "Jenny Sanders", image: "" },
    { id: 6, role: "Sales Advisor", name: "Amy Walker", image: "" },
  ];
  return (
    <div>
      <SectionTitle subHeading={"Our Team"} heading={"Meet with Us"} />
      <div className="grid grid-cols-3">
        {team.map((member) => (
          <div className="card rounded-none text-black group" key={member.id}>
            <figure className="">
              <Image
                width={600}
                height={800}
                src={member.image}
                alt="member"
                className="w-full group-hover:scale-110 delay-75 duration-300"
              />
            </figure>
            <div className="card-body py-2 px-1">
              <p className="font-medium bebas-neue tracking-[1px]">Anime</p>
              <h2 className="card-title group-hover:text-zinc-500 bebas-neue tracking-[2px]">
                {member.name}
              </h2>
              <div className="flex items-center gap-4">
                <h3 className="font-semibold text-zinc-500 ">{member.role}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
