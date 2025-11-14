import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import Verify from '../pages/Verify.jsx'
import ForgotPassword from '../pages/ForgotPassword.jsx'
import VerifyEmail from '../pages/VerifyEmail.jsx'
import ChangePassword from '../pages/ChangePassword.jsx'
import VerifyOTP from '../pages/VerifyOTP.jsx'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<ProtectedRoute><Navbar/><Home/></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/change-password/:email' element={<ChangePassword/>} />
        <Route path='/verify-otp/:email' element={<VerifyOTP/>} />
        <Route path='/verify' element={<VerifyEmail/>}/>
        <Route path='/verify/:token' element={<Verify/>}/>


      </Routes>
    </div>
  )
}

export default App