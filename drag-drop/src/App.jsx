import React from 'react'
import DragAndDrop from './components/DragAndDrop'
import "./index.css"

const initialData = {
  Todo: [
    "Design UI mockups",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  "In Progress": ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};
const App = () => {
  return (
    <div>
      <DragAndDrop initialState={initialData} />
    </div>
  )
}

export default App
