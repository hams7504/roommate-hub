import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import {PriceSplit} from "./pages/PriceSplitNav";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter } from 'react-router-dom'
import { PriceSplit } from "./pages/PriceSplit";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
      <div className="wrapper">
        <HomePage />
        <PriceSplit />
      </div>
  );
}

export default App;