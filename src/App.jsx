import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Page1 from "./pages/useEffectDemos/Page1";
import Page2 from "./pages/useEffectDemos/Page2";
import Page3 from "./pages/useEffectDemos/Page3";
import Page4 from "./pages/useEffectDemos/Page4";
import Page5 from "./pages/useEffectDemos/Page5";
import Page6 from "./pages/useEffectDemos/Page6";
import Page7 from "./pages/useEffectDemos/Page7";
import Page8 from "./pages/useEffectDemos/Page8";
import Page9 from "./pages/useEffectDemos/Page9";
import Page10 from "./pages/useEffectDemos/Page10";
import Page11 from "./pages/useEffectDemos/Page11";
import Page12 from "./pages/useEffectDemos/Page12";
import Page13 from "./pages/useEffectDemos/Page13";

import MiniProject1 from "./pages/miniProjects/MiniProject1";
import MiniProject2 from "./pages/miniProjects/MiniProject2";
import MiniProject3 from "./pages/miniProjects/MiniProject3";
import MiniProject4 from "./pages/miniProjects/MiniProject4";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <Router>
      <button
        className="hamburger-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"> &#9776;
      </button>

      <div className="app-container d-flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main
          className="content-area"
          onClick={() => sidebarOpen && setSidebarOpen(false)}
        >


          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
            <Route path="/page8" element={<Page8 />} />
            <Route path="/page9" element={<Page9 />} />
            <Route path="/page10" element={<Page10 />} />
            <Route path="/page11" element={<Page11 />} />
            <Route path="/page12" element={<Page12 />} />
            <Route path="/page13" element={<Page13 />} />
            <Route path="/mini1" element={<MiniProject1 />} />
            <Route path="/mini2" element={<MiniProject2 />} />
            <Route path="/mini3" element={<MiniProject3 />} />
            <Route path="/mini4" element={<MiniProject4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
