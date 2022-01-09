import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Themes} from './Pages/Themes';
import {About} from './Pages/About';
import {Home} from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/themes" element={<Themes/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

