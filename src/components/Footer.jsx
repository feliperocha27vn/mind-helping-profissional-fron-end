import { EnvelopeSimple } from '@phosphor-icons/react'
import { Phone } from 'lucide-react'

export function Footer() {
  return (
    <div className="mt-8 p-3 border-[0.5px] rounded-xl mb-4">
      <h1 className="text-2xl font-semibold">Contate-nos</h1>
      <div className="mt-2.5 space-y-2.5">
        <div className="flex items-center gap-x-2.5">
          <EnvelopeSimple size={20} />
          <p>suporte.mindhelping@gmail.com</p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <Phone size={20} />
          <p>+55 18 99999-0000</p>
        </div>
      </div>
    </div>
  )
}
