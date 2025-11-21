import { react } from 'react'
import{BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Register from './assets/components/pages/Register'
import Protectedroute from './assets/components/Protectedroute.jsx'
import  NotFound  from './assets/components/pages/NotFound'
import Home from './assets/components/pages/Home.jsx'
import Login from './assets/components/pages/login.jsx'
import "./styles/style.css";





function Logout(){
   localStorage.clear()
   return <Navigate to ='/login'/>
}

function RegisterAndLogout(){
   localStorage.clear()
   return <Register/>
}

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ='/'element ={<Protectedroute><Home/></Protectedroute>}/>
        <Route path ='/login'element={<Login/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path='/register'element={<RegisterAndLogout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
