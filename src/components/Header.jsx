// Images
import { useNavigate } from 'react-router'
import logoMindHelping from '../assets/mind-helping-logo.png'
// Components
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

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
      <Sheet>
        <SheetTrigger className="space-y-1">
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className={'hidden'}>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
          <div className="p-6 pt-12 space-y-3">
            <p
              onClick={handleNavigateLogin}
              className="w-[9rem] cursor-pointer"
            >
              Já tenho acesso
            </p>
            <p>Sobre nós</p>
            <p>Trablhe conosco</p>
            <p>FAQ</p>
            <p>Contato</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
