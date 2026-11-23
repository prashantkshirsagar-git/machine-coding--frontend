import "./App.css"
import Traffic from './components/Traffic'

function App() {
  return (
    <Traffic lights={['red', 'green', 'blue', 'yellow']} />
  )
}

export default App
