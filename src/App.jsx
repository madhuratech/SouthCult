import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import SouthCultLabel from "./pages/Label";
import Collab from "./pages/Collab";

import Navbar from "./components/Layout/navbar"
import Footer from "./components/Layout/footer"
import PageLoader from "./components/Layout/PageLoader";
import SmoothCursor from "./components/Layout/SmoothCursor";
import SmoothScroll from "./components/Layout/SmoothScroll";

import WorkSubmission from "./components/Contact/form";

// Shared layout for all pages
function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <SmoothCursor />
      <PageLoader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/label" element={<SouthCultLabel />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/contact" element={<WorkSubmission />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;