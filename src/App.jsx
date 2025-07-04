import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentTable from './pages/studentTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentTable/>
    </>
  )
}

export default App
