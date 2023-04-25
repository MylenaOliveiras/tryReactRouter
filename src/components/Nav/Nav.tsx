import { Link } from "react-router-dom";
import reactLogo from "/imagens/react.svg";

export default function Nav() {
  return (
    <nav className="bg-black w-full h-20 flex fixed pr-20 place-content-between">
      <Link to="/">
        <img className="ml-40 w-16 mt-3" src={reactLogo} />{" "}
      </Link>

      <ul className="text-sky flex gap-9 py-6 text-lg font-bold">
        <Link to="/">
          <li className="hover:scale-110 hover:text-pink duration-500">Home</li>
        </Link>
        <Link to="/Kanban">
          <li className="hover:scale-110 hover:text-pink duration-500">
            Kanban
          </li>
        </Link>
        <Link to="/Organograma">
          <li className="hover:scale-110 hover:text-pink duration-500">
            Organograma
          </li>
        </Link>
      </ul>
    </nav>
  );
}
