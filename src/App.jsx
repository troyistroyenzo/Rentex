import { useState } from 'react'
import Navbar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
