import { Routes, Route } from "react-router-dom";
import Blue from "./Blue.jsx"
import Red from "./Red.jsx"
import Home from "./Home.jsx"

export default function Main_section() {
    return (
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red"  element={<Red />} />
          <Route path="/"     element={<Home />} />

        </Routes>
        
      </div>

    );
}