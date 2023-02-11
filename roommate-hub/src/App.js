import logo from './logo.svg';
import './App.css';
import React from 'react';
import GoogleCalendar from './googleCalendar';
import MyComponent from './components';

function App() {
  return (
      <div>
        <MyComponent />
        <GoogleCalendar />
      </div>
  );
}

export default App;
