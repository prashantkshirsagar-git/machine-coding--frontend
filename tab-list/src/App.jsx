import "./App.css"
import TabList from './tab-list'

const App = () => {
const tabList = [{
    id:'a',
    label:'Compoe'
}]

  return (
    <>
   <TabList />
   </>
  )
}
function ComponentA(){
    return <h1>Component A</h1>
}
function ComponentB(){
    return <h1>Component B</h1>
}
function ComponentC(){
    return <h1>Component C</h1>
}
function ComponentD(){
    return <h1>Component D</h1>
}

export default App
