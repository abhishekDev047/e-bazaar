import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Myorders from "./Components/Myorders";
import Mycart from "./Components/Mycart";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Product from "./Components/Product";



const App=()=> {
  return (
    <div className="App text-lg flex flex-col flex-wrap">
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Myorders" element={<Myorders/>}></Route>
      <Route exact path="/Mycart" element={<Mycart/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
      <Route exact path="/Contact" element={<Contact/>}></Route>
      <Route exact path="/detail" element={<Product/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
