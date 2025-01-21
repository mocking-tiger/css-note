import Home from "./Pages/Home";
import Prologue from "./Pages/Ex2Prologue";
import WeAre from "./Pages/Ex1WeAre";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<WeAre />} />
        <Route path="/2" element={<Prologue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
