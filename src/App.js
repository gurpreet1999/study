import React from 'react';
import TeacherForm from './TeacherForm';
import "./App.css"
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      


      <BrowserRouter>
      
        
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<TeacherForm/>} />
            
            
          </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
