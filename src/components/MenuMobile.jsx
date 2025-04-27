import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useNavigate } from 'react-router'

export function MenuMobile() {
  const navigate = useNavigate()

  function handleNavigateLogin() {
    navigate('/login')
  }

  return (
    <div className="lg:hidden">
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
