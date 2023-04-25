import Whatsapp from "/imagens/whatsapp.svg";
import Github from "/imagens/github.svg";
import Instagram from "/imagens/instagram.svg";
import Linkedin from "/imagens/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-20 flex py-4 place-content-between bottom-0 fixed">
      <h1 className="hover:scale-110 hover:text-pink duration-500 text-sky text-lg font-bold py-2 px-40">
        Mylena Oliveira
      </h1>
      <ul className="flex mr-40">
        <li>
          <a href="">
            <img className="" src={Whatsapp} />
          </a>
        </li>
        <li>
          <a href="https://github.com/MylenaOliveiras">
            <img src={Github} />
          </a>
        </li>

        <li>
          <a href="">
            <img src={Instagram} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mylena-oliveira-5148b31b5/">
            <img src={Linkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
