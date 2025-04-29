// Hooks
import { useNavigate } from 'react-router'
// Components
import { LoginForm } from './components/LoginForm'
// Image
import islutracaoDeConceitoPsicologo from '../../assets/ilustracao-do-conceito-de-psicologo.png'

export function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:bg-slate-400 md:flex-row md:p-30 lg:p-0 xl:p-10 xl:gap-x-16">
      <LoginForm />
      <img
        src={islutracaoDeConceitoPsicologo}
        alt="Ilustração do conceito de psicólogo"
        className="hidden lg:block w-5/12"
      />
    </div>
  )
}
