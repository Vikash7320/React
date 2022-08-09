import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from './Contact'
import Interest from './Interest'
function App() {
   return (
      <BrowserRouter>
         <nav className="container-fluid bg-danger">
            <Link to='/' className="text-success text-decoration-none p-4 fs-2">Home</Link>
            <Link to='/About' className="text-success text-decoration-none p-4 fs-2">About Us</Link>
            <Link to='/Contact' className="text-success text-decoration-none p-4 fs-2">Contact Us</Link>
            <Link to='/Interest' className="text-success text-decoration-none p-4 fs-2">Interest</Link>
         </nav>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Interest" element={<Interest />} />
         </Routes>
      </BrowserRouter>
   )
}
export default App
