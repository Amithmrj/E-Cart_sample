import './App.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Home from '../src/pages/Home'
import Cart from '../src/pages/Cart'
import Wishlist from '../src/pages/Wishlist'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App
