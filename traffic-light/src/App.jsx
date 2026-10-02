import './App.css'
import React from 'react'
import TrafficLight from './traffic-light'

const TrafficLights = [
  {
  color:"red",
  time: 4000,
  order: 1,
  displayOrder: 3,
},
  {
  color:"yellow",
  time: 1000,
  order: 3,
  displayOrder: 1,
},
  {
  color:"green",
  time: 2000,
  order: 2,
  displayOrder: 2,
},
]

function App() {
  return (
   <>
   <TrafficLight data={TrafficLights}/>
   </>
  )
}

export default App
