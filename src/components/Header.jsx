import logoMindHelping from '../assets/mind-helping-logo.png'

export function Header() {
  return (
    <div className="bg-[url(../assets/backgorund-blur-header.png)] p-5 flex justify-center items-center">
      <div>
        <p className="text-2xl title-mindHelping">Mind Helping</p>
        <p className="text-end">Profissional</p>
      </div>
      <img src={logoMindHelping} className="h-16" alt="Logo do MindHelping" />
    </div>
  )
}
