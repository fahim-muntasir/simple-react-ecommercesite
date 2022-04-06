import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/pages/Card";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
