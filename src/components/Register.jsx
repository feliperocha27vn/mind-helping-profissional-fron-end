export function Register() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form className="w-full flex flex-col items-center px-6">
        <h1 className="text-3xl w-7/12 text-center">
          Cadastro de Profissional
        </h1>
        <div className="mt-10 w-full">
          <div className="space-y-1">
            <p className="text-xl font-light">Nome</p>
            <input
              type="text"
              className="border border-zinc-500 w-full py-3 px-4 rounded-xl"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
