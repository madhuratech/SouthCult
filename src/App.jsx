import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SouthCultLabel from "./pages/Label";
import Collab from "./pages/Collab";
import PageLoader from "./components/Layout/PageLoader";
import WorkSubmission from "./components/Contact/form";
// import SmoothCursor from "./components/Layout/SmoothCursor";
import SmoothScroll from "./components/Layout/SmoothScroll";



function App() {
  return (
    <BrowserRouter>
    <SmoothScroll/>
    {/* <SmoothCursor/> */}
      <PageLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<SouthCultLabel />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="/contact" element={<WorkSubmission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;