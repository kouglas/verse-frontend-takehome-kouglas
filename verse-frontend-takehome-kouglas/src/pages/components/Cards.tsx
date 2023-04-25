import { CardsInfo } from "../interfaces/CardInfo";
import Image from "next/image";
import Link from "next/link";

const cardsInfo: CardsInfo[] = [
  {
    image: "",
    title: "Goal Setting & Portfolio Design",
    buttonLink: "/card1"

  },
  {
    image: "",
    title: "RFO Administration",
    buttonLink: "/card2"

  },
  {
    image: "",
    title: "Commercial Structuring",
    buttonLink: "/card3"

  },
  {
    image: "",
    title: "Energy Supply Portfolio Construction",
    buttonLink: "/card4"

  },
]

const Cards = () => {
  return ( 
    
    <div className="grid gap-2 grid-cols-2 grid-rows-2 mb-10">
      {cardsInfo.map((card) => (
        <div key={card.title} className="rounded-lg border border-transparent w-64 h-72 px-5 py-4 transition-colors bg-gray-100 hover:border-gray-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <Image
            src="/Verse-Logo.png"
            height={96}
            width={96}
            alt="verse logo"
            className="ml-auto mr-auto"
          />
          <p className="mb-3 text-center mt-8 truncate p-2">{card.title}</p>
          <div className=" text-center justify-center">
          <Link href="/charts" className="py-2 px-8 rounded-full border-1  no-underline bg-gray-200">Set up</Link>
          </div>
        </div>
      
      ))}

    </div>

  );
}

export default Cards;