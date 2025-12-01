import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import 'animate.css'


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import NotFound from "./components/NotFound";
import Holidays from "./components/Holidays";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="/holidays" element={<Holidays></Holidays>}></Route>
        <Route path="/contacts" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

