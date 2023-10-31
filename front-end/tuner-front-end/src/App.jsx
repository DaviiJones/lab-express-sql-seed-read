import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/new" element={<New />} />
          <Route exact path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
