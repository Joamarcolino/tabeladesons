import React from 'react'
import Playboard from './Playboard.js'
import './App.css'

function App(){

  return(
    <div className='Playboard'>
      <div className='title'>
        <h1>THE SOUND BOARD</h1>
        <p>plenty scuffed and lovely</p>
      </div>
      <Playboard />
    </div>
  )
}

export default App;