import { useState } from 'react'
import { TodoWrapper } from './components/TodoWrapper'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<TodoWrapper />}></Route>
                </Routes>
            </Router>
        </div>
  )
}

export default App
