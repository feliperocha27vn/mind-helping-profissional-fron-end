import './index.css'
import { App } from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ReactDOM from 'react-dom/client'
import { Register } from './components/Regjster/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cadastro-profissional" element={<Register />} />
    </Routes>
  </BrowserRouter>
)
