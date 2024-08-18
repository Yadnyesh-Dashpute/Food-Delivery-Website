import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopUp from './Components/LoginPopup/LoginPopUp'
const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        < Route path='/' element={<Home></Home>}></Route>
        < Route path='/cart' element={<Cart/>}></Route>
        < Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
   <Footer></Footer>
    </>
  )
}

export default App
