import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Menubar from "./components/Menubar.jsx";
import Landingpage from "./pages/landingpage/landingpage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MainPage from "./pages/MainPage.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";
import { Toaster } from 'react-hot-toast';
export default function () {
  return (
    <BrowserRouter>
     <Toaster position="top-center" /> 
      <Menubar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/genrate" element={<MainPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
