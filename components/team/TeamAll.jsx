import Image from "next/image";
import { useRouter } from "next/router";
import { speakers } from "../../data/speakers";
import Social from "../others/Social";
import dots1 from "../../public/image/team/allteam-bg-dot.png";
const Team = () => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/speakers/${id}`);
  };
  return (
    <div className="relative">
      <div className="absolute top-0 animate-pulse">
        <Image src={dots1} height={1200} alt="conference dots" />
      </div>
      <div className="mt-[64px] mb-[70px] md:my-[120px]   max-w-[1296px] mx-auto z-10">
        <h2 className="text-center text-3xl md:text-[57px]  font-bold mb-6 md:mb-[30px]">
          Meet Our Event <span className="text-[#F112A2]"> Speakers</span>
        </h2>
        <p className="text-base md:text-lg px-2 text-center mt-3 mb-8 md:mb-[56px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum{" "}
          <br /> urna sed erat tortor aliquam ipsum
        </p>

        <div className="flex flex-col mx-3 lg:mx-0 flex-wrap md:flex-row gap-4 md:gap-6 lg:gap-y-[60px] justify-center items-center text-center">
          {speakers.map((person) => (
            <div
              key={person.name}
              onClick={() => handleClick(person.id)}
              className="hover:bg-[#F112A2]  z-10 p-[7px] bg-white shadow-md lg:w-[306px] flex flex-col cursor-pointer items-center rounded-lg relative card"
            >
              <Image
                width={300}
                className="rounded-lg"
                height={420}
                src={person.photo}
                alt="team member"
              />

              <div className="bg-[#5A00CC] rounded-b-lg mx-auto w-[96%] pt-10 pb-3 rounded-t-[50%] transition-all card-inner">
                <h5 className="text-white text-2xl  font-semibold">
                  {person.name}
                </h5>
                <p className="text-white text-lg my-2">Speakers</p>
                <Social classes="text-white" size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
