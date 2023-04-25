import { useState } from "react";
import Board from "../components/Board/Board";
import Footer from "../components/Footer/Footer";
import { ICards } from "../components/PersonCard/types";
import Form from "../components/Form/Form";
import Nav from "../components/Nav/Nav";
const teams = [
  {
    name: "Programação",
    primary: "bg-green",
    secondary: "bg-green/20",
  },
  {
    name: "Front-End",
    primary: "bg-blue",
    secondary: "bg-blue/20",
  },
  {
    name: "Data Science",
    primary: "bg-lime",
    secondary: "bg-lime/20",
  },
  {
    name: "Devops",
    primary: "bg-red",
    secondary: "bg-red/20",
  },
  {
    name: "UX e Design",
    primary: "bg-pink",
    secondary: "bg-pink/20",
  },
  {
    name: "Mobile",
    primary: "bg-yellow",
    secondary: "bg-yellow/20",
  },
  {
    name: "Inovação e Gestão",
    primary: "bg-orange",
    secondary: "bg-orange/20",
  },
];

function App() {
  const [cards, setCards] = useState<ICards[]>([]);

  const addCard = (card: ICards) => {
    setCards([...cards, card]);
  };

  return (
    <div className="App mb-20">
      <Nav />
      <header>
        <img className="w-full pt-20" src="./imagens/header.svg" />
      </header>
      <Form
        cardRegistered={(card) => addCard(card)}
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team) => (
        <Board
          cards={cards}
          team={team.name}
          primaryColor={team.primary}
          secondaryColor={team.secondary}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
