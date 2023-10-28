import React, {useId} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"


function App() {
  const uuid = useId()

  return (
    <div className="app">
     <Router>
         <Routes>
             <Route path="/:id" element={<Home />} />
         </Routes>

         <Navigate to={`f${new Date().toString()} ${uuid}`} />
     </Router>
    </div>
  )
}

export default App
