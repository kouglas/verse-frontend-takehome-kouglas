import { CardsInfo } from "../interfaces/CardInfo";
import Image from "next/image";

const cardsInfo: CardsInfo[] = [
  {
    image: "/Verse-Logo.png",
    title: "Card 1",
    buttonLink: "/card1"

  },
  {
    image: "",
    title: "Card 2",
    buttonLink: "/card2"

  },
  {
    image: "",
    title: "Card 3",
    buttonLink: "/card3"

  },
  {
    image: "",
    title: "Card 1",
    buttonLink: "/card3"

  },
]

const Cards = () => {
  return ( 
    <div className="grid gap-2 grid-cols-2 grid-rows-2">
      {cardsInfo.map((card) => (
        <a 
        href="card.buttonLink"
        key={card.title}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <Image
            src="/Verse-Logo.png"
            height={144}
            width={144}
            alt="verse logo"
            className="ml-auto mr-auto"
          />
          <h5 className="mb-3 text-2xl font-semibold">{card.title}</h5>
          <button>Sign up</button>
        </a>
      ))}

    </div>

  );
}

export default Cards;