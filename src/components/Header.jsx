// Images
import { useNavigate } from 'react-router'
import logoMindHelping from '../assets/mind-helping-logo.png'
import { MenuMobile } from './MenuMobile'

export function Header() {
  const navigate = useNavigate()

  function handleNavigateLogin() {
    navigate('/login')
  }

  return (
    <div className="bg-[url(../assets/backgorund-blur-header.png)] p-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div>
          <p className="text-2xl title-mindHelping">Mind Helping</p>
          <p className="text-end">Profissional</p>
        </div>
        <img src={logoMindHelping} className="h-16" alt="Logo do MindHelping" />
      </div>
      <MenuMobile />
      <div className="hidden md:flex md:items-center md:gap-4">
        <p onClick={handleNavigateLogin} className="w-[9rem] cursor-pointer">
          Já tenho acesso
        </p>
        <p className="cursor-pointer">Sobre nós</p>
        <p className="cursor-pointer">Trablhe conosco</p>
        <p className="cursor-pointer">FAQ</p>
        <p className="cursor-pointer">Contato</p>
      </div>
    </div>
  )
}
