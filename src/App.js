
import Home from "./Containers/Home";
import { Routes, Route } from "react-router-dom";
import Hero from "./Containers/Hero";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
