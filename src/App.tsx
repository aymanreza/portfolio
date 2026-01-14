import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/Home'
import { NotFound } from "./pages/NotFound"
import { Experience } from "./pages/Experience"
import { Myself } from "./pages/Myself"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path ='/experience' element = {<Experience />}/>
          <Route path = '/myself' element = {<Myself />}/>
          <Route path = '*' element = {<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
