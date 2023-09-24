import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Docs from './pages/Docs'
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Team'
import SharedLayout from './pages/SharedLayout'

const RoutePage = () => {
  return <Router>
        <Routes>
            <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/docs' element={<Docs/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='*' element={<div>404 hatası</div>}/>
            </Route>
        </Routes>
    </Router>
  
}

export default RoutePage
