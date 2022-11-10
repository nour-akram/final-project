// import logo from './logo.svg';
// import { useState,useEffect } from 'react';
import "./App.css";
//  import {firestore} from './firebase/config';
import Phones from "./components/products/Phones";
import React, { createContext, useState } from "react";
// import DarkModeToggle from "react-dark-mode-toggle";
import Header from "./components/header/Header";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import ReactSwitch from "react-switch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import Home from "./components/Home/Home";
import { AuthContextProvider } from "./components/context/AuthContext";
// import {createContext} from "react";
import Login1 from "./components/login-pages/Login1";
import Login2 from "./components/login-pages/Login2";
import Login3 from "./components/login-pages/Login3";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Hashim from "./Hashim"
import { LanguageProvider, LanguageContext } from "./components/context/LanguageContext";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [Lang, setLang] = useState("en");


  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <AuthContextProvider>
      <LanguageProvider  value={{Lang,setLang}}>
      <ThemeContext.Provider value={{ theme, toggleTheme ,username,setUsername}}>
        <div className="App" id={theme} dir={Lang =="en"?"ltr":"rtl"}>
          <Router>
            <Header />

            <div className="switch">
              <div className="sun">
                <BsSunFill />
              </div>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
              <div className="dark">
                <MdDarkMode />
              </div>
            </div>

            {/* <Phones/> */}

            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products/:productId" element={<SingleProduct />} />
                <Route path="/login1" element={<Login1 />} />
                <Route path="/login2" element={<Login2 />} />
                <Route path="/login3" element={<Login3 />} />
                <Route path="/Hashim" element={<Hashim />} />
               
              </Routes>
            </div>
          </Router>
        </div>
      </ThemeContext.Provider>
      </LanguageProvider>
    </AuthContextProvider>
  );
}

export default App;
