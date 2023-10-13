import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>{" "}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
