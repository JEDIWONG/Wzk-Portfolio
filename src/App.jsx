import Home from './screen/home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/layout'
import About from './screen/about'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Wzk-Portfolio/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
