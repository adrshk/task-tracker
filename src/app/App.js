import './App.css'
import React from 'react'
import Schedule from './components/Schedule'
import Tags from './components/Tags'

function App() {
  return (
    <div className={'mx-2'}>
      <h1 className="title" align="center">Research Dashboard</h1>
      <Tags/>
      <hr></hr>
      <Schedule/>
    </div>
  );
}
export default App;