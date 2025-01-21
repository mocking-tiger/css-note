import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Prologue from "./Pages/Ex2Prologue";
import WeAre from "./Pages/Ex1WeAre";
import LandingClip from "./Pages/Ex3LandingClip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<WeAre />} />
        <Route path="/2" element={<Prologue />} />
        <Route path="/3" element={<LandingClip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
