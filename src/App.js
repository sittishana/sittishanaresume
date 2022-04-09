import logo from "./logo.svg";
import "./App.css";
//Components
import Header from "./components/Header";
//Pages
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import Login from "./components/login/Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
