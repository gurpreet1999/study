import React from 'react';
import TeacherForm from './TeacherForm';
import "./App.css"
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      


      <BrowserRouter>
      <Navbar/>
      <Toaster />
        
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<TeacherForm/>} />
            
            
          </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
