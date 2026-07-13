import { useState } from 'react'
import './App.css'
import TabForm from './components/TabForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <TabForm />
    </div>
  )
}

export default App
