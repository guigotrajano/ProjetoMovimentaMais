import { Routes, Route } from 'react-router-dom'
import Login from './FrontEnd/Pages/Login'
import Cadastro from './FrontEnd/Pages/Cadastro'
//import Home from './Pages/Homepage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}

export default App
