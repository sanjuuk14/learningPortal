import { Route, Routes } from "react-router-dom";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import JavaCodes from "./pages/JavaCodes";
import PythonCodes from "./pages/PythonCodes";
import C_Codes from "./pages/C_Codes";
import Compiler from "./pages/Compiler";

function App() {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/javacodes" element={<JavaCodes />} />
        <Route path="/pythoncodes" element={<PythonCodes />} />
        <Route path="/ccodes" element={<C_Codes />} />
        <Route path="/compiler" element={<Compiler />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
