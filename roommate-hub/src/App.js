import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import GoogleCalendar from './googleCalendar';
import {PriceSplit} from "./pages/PriceSplit";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div>
      <Routes>
            <Route path = '/finances' element = {<PriceSplit />} />
           <Route exact path ='/' element = {<Dashboard />} />
           <Route exact path='/calendar' element = {<GoogleCalendar />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;