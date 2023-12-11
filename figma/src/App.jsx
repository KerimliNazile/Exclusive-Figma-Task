import { Route, Routes } from "react-router-dom"
import './App.css'
import Main from './Layout/Main/main'
import AboutPage from './Pages/AboutPage/about'
import Contact from './Pages/ContactPage/contact'
import Home from './Pages/HomePage/home'
import SignUp from './Pages/SignUpPage/signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
