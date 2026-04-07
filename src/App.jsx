//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import ResumeForm from './Pages/ResumeForm'
import Preview from './Pages/Preview'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
   
   <BrowserRouter>

    <nav>
    <Link to="/">Home</Link><br></br>
      <Link to="/form">Form</Link><br></br>
        <Link to="/preview">Preview</Link>
   </nav>


      <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/form' element={<ResumeForm/>} />
      <Route path='/preview' element={<Preview />} />
    </Routes>
  </BrowserRouter>

   

     
    </>
  )
}

export default App
