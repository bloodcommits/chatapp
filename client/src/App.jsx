import React , {lazy} from 'react'
import {BrowserRouter ,Route, Routes} from "react-router-dom"

const Home = lazy(()=>import("./pages/Home"))// dynamic importing of the component
const Login = lazy(()=>import("./pages/Login")) 
const Chat = lazy(()=>import("./pages/Chat")) 
const Groups = lazy(()=>import("./pages/Groups")) 

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route path='/chat/:chatId' element={<Chat/>}  />
      <Route path='/groups' element={<Groups/>}  />
    </Routes>
    </BrowserRouter>
    
    )
}

export default App