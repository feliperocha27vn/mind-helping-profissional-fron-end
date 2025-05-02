// Styles
import './index.css'
// Libs
import { BrowserRouter, Route, Routes } from 'react-router'
import ReactDOM from 'react-dom/client'
// Pages
// - tela inicial
import { App } from './App.jsx'
// - autenticação
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
// Dashboard
// - layout default
import { DefaultLayout } from './pages/Dashboard/layout/DefaultLayout'
// - pages
import Home from './pages/Dashboard/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastro-profissional" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/painel" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
