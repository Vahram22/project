import React from 'react';
import './App.css';
import Gender from './features/category/Gender';

function App() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "E6E6E6"
    }} >
      <Gender/>
    </div>
  );
}

export default App;
