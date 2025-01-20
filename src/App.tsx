import Home from "./Pages/Home";
import Prologue from "./Pages/Prologue";
import WeAre from "./Pages/WeAre";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/01" element={<WeAre />} />
        <Route path="/02" element={<Prologue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
