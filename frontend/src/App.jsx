import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import Verify from '../pages/Verify.jsx'
import VerifyEmail from '../pages/VerifyEmail.jsx'


function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verify' element={<VerifyEmail/>}/>
        <Route path='/verify/:token' element={<Verify/>}/>


      </Routes>
    </div>
  )
}

export default App