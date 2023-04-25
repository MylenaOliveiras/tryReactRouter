import Titulo from "../Title/Title";
import { IBoard } from "./types";
import PersonCard from "../PersonCard/PersonCard";

export default function Board({
  cards,
  team,
  primaryColor,
  secondaryColor,
}: IBoard) {
  return (
    <section className={` h-auto text-center py-10 px-10 ${secondaryColor} `}>
      <Titulo>{team}</Titulo>
      <div className={`w-8 h-1 m-auto my-3 ${primaryColor}`} />
      <div className="flex gap-6 ">
        {cards
          .filter((card) => card.team === team)
          .map((card) => (
            <PersonCard
              name={card.name}
              position={card.position}
              team={card.team}
              image={card.image}
              primaryColor={primaryColor}
            />
          ))}
      </div>
    </section>
  );
}
