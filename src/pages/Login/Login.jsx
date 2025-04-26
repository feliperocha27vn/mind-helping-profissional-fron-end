// Hooks
import { useNavigate } from 'react-router'
// Components
import { LoginForm } from './components/LoginForm'
// Image
import islutracaoDeConceitoPsicologo from '../../assets/ilustracao-do-conceito-de-psicologo.png'

export function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:bg-cyan-500 md:flex-row">
      <LoginForm />
      <img
        src={islutracaoDeConceitoPsicologo}
        alt="Ilustração do conceito de psicólogo"
        className="hidden lg:block w-1/2"
      />
    </div>
  )
}
