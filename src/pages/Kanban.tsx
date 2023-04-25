import Kanban from "../components/Kanban/Kanban";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <main className="App bg-cold ">
      <Nav />
      <div className="bg-[url('/imagens/background.svg')] min-h-screen bg-no-repeat bg-center pt-20">
        <h1 className="text-black font-bold	text-4xl text-center p-16 pt-1">
          Kanban
        </h1>
        <Kanban />
      </div>
      <Footer />
    </main>
  );
}

export default App;
