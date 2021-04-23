import './App.css'
import React from 'react'
import Schedule from './components/Schedule'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <div className={'mx-2 mt-5'}>
        <Schedule/>
      </div>
    </div>
  );
}
export default App;