import React from 'react'
import Accordion from './Accordion'
import './App.css'
const App = () => {

const item=[
  {
    title:"JavaScript Basic",
    content:"Learn variable,functions, and loops in JavaScript."
  },
  {
    title:"React.js Overview",
    content:"understand components,state, and props in React."
  },
  {
    title:"Node.js",
    content:"Basics of server-side development with Node.js."
  },
  {
    title:"Full-Stack Development",
    content:"Build Full-Stack app with React and Node.js."
  },
];
  return <Accordion item={item}/>
   
}

export default App
