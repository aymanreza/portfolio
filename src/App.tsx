import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/Home'
import { NotFound } from "./pages/NotFound"
import { Experience } from "./pages/Experience"
import { Myself } from "./pages/Myself"
import { Projects } from "./pages/Projects"


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/myself' element={<Myself />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
