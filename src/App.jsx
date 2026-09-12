import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SouthCultLabel from "./pages/Label";
import Collab from "./pages/Collab";
import PageLoader from "./components/Layout/PageLoader";



function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<SouthCultLabel />} />
        <Route path="/collab" element={<Collab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;