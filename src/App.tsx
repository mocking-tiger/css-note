import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WeAre from "./Pages/Ex1WeAre";
import Prologue from "./Pages/Ex2Prologue";
import LandingClip from "./Pages/Ex3LandingClip";
import EmailAutoComplete from "./Pages/Ex4EmailAutoComplete";
import DynamicLoading from "./Pages/Ex5DynamicLoading";
import WarningSlider from "./Pages/Ex6WarningSlider";
import DelayedSearch from "./Pages/Ex7DelayedSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<WeAre />} />
        <Route path="/2" element={<Prologue />} />
        <Route path="/3" element={<LandingClip />} />
        <Route path="/4" element={<EmailAutoComplete />} />
        <Route path="/5" element={<DynamicLoading />} />
        <Route path="/6" element={<WarningSlider />} />
        <Route path="/7" element={<DelayedSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
