// Styles
import './index.css'
// Libs
import { BrowserRouter, Route, Routes } from 'react-router'
import ReactDOM from 'react-dom/client'
// Pages
import { App } from './App.jsx'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastro-profissional" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)
