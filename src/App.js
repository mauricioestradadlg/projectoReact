import Navegation from './componentes/Navegation.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Inicio from './pagina/Inicio.jsx'
import AboutUs from './pagina/AboutUs.jsx'
import Catalogo from './pagina/Catalogo.jsx'
import Contacto from './pagina/Contacto.jsx'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    
    <Router>
    <div>
        <Header/><br/>
        <Navegation/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/catalogo" element={<Catalogo/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <Footer/>
        
    </div>
    </Router>
  )
}

export default App
