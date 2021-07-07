import React from 'react';
import { Demo } from './components/Demo';
import { Block } from './components/Block';
import "./styles/site.css"
import { Tube } from './components/Tube';

const itemSet = [
  {
    id:1,
    color:"blue",
    order:3
  },
  {
    id:2,
    color:"blue",
    order:2
  },
  {
    id:3,
    color:"red",
    order:1
  },
  {
    id:4,
    color:"red",
    order:4
  },
]

function App() {
  // return <Demo/>
  return (
    <div className="container">
      <div className="game-area">
        <Tube/>
      </div>
    </div>
  );
}

export default App;
