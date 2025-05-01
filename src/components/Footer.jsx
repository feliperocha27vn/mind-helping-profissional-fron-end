import {
  Envelope,
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Instagram, Mail, Phone } from 'lucide-react'
import { useNavigate } from 'react-router'

export function Footer() {
  const navigate = useNavigate()

  function handleNavigateRegister() {
    navigate('/cadastro-profissional')
  }
  function handleNavigatelogin() {
    navigate('/login')
  }

  return (
    <div className="space-y-5 mt-8 p-3 border-[0.5px] rounded-xl mb-4 lg:flex lg:items-start lg:justify-between lg:gap-x-3">
      <div>
        <h1 className="text-xl font-semibold">Contate-nos</h1>
        <div className="mt-2.5 space-y-2.5">
          <div className="flex items-center gap-x-2.5">
            <Envelope size={20} />
            <p className="text-sm">suporte.mindhelping@gmail.com</p>
          </div>
          <div className="flex items-center gap-x-2.5">
            <Phone size={20} />
            <p>+55 18 99999-0000</p>
          </div>
        </div>
      </div>
      <div className="space-y-2.5">
        <h1 className="text-xl font-semibold">MindHelping Profissional</h1>
        <p className="cursor-pointer" onClick={handleNavigatelogin}>
          Fazer login
        </p>
        <p className="cursor-pointer" onClick={handleNavigateRegister}>
          Criar conta
        </p>
      </div>
      <div className="cursor-pointer space-y-2.5">
        <h1 className="text-xl font-semibold w-36">Links</h1>
        <p>Termo e condições</p>
      </div>
      <div className="space-y-2.5">
        <h1 className="text-xl font-semibold w-36">Redes Sociais</h1>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <InstagramLogo size={20} />
          <p>@MindHelping</p>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <WhatsappLogo size={20} />
          <p>+55 18 99999-0000</p>
        </div>
      </div>
    </div>
  )
}
