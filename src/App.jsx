import { BrowserRouter, Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "animate.css";

import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/Home";
import Teachers from "./components/Teachers";
import NotFound from "./components/NotFound";
import Holidays from "./components/Holidays";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
