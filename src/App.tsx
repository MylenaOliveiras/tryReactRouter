import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Organograma from "./pages/Organograma";
import Kanban from "./pages/Kanban";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Organograma" element={<Organograma />} />
        <Route path="/Kanban" element={<Kanban />} />
      </Routes>
    </Router>
  );
}

export default App;
