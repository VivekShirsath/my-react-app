import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route>
        <Route path="/" element = {<Home/>}/>
        <Route path="/search" element = {<Search/>}/>
      </Route>
      </Routes> 
    </>
  )
}

export default App
