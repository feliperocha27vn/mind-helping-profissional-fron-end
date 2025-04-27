import { GoogleLoginButton } from '@/components/GoogleLoginButton'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { GoogleOAuthProvider } from '@react-oauth/google'

export function LoginForm() {
  function handleNoRegistration() {
    navigate('/cadastro-profissional')
  }

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user)
      // Adicione sua lógica após o login
    } catch (error) {
      console.error('Erro na autenticação:', error)
    }
  }

  return (
    <form className="p-5 lg:ml-4 md:py-32 md:px-10 md:rounded-2xl space-y-4 bg-white w-full max-w-[40rem]">
      <h1 className="text-3xl font-medium text-center">Faça login</h1>
      <span className="font-light">Usuário</span>
      <Input className={'border-zinc-400'} />
      <span className="font-light">Senha</span>
      <Input className={'border-zinc-400'} />
      <div className="flex items-center gap-x-2">
        <Checkbox className={'border-black  '} />
        <span className="font-light">Manter-me conectado</span>
      </div>
      <div>
        Esqueceu sua senha?{' '}
        <a href="lugaralgum" className="underline underline-offset-2">
          Recuperar
        </a>
      </div>
      <Button type="submit" className={'w-full'}>
        Login
      </Button>
      <GoogleOAuthProvider clientId="330329046724-0kffvh104f4prq00rl81b65do3pfb7rb.apps.googleusercontent.com">
        <GoogleLoginButton />
      </GoogleOAuthProvider>
      <div className="flex items-center gap-x-2">
        Não possui acesso?{' '}
        <p
          onClick={handleNoRegistration}
          className="underline underline-offset-2 cursor-pointer"
        >
          Registre-se
        </p>
      </div>
    </form>
  )
}
