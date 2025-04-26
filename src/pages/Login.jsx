import { GoogleLoginButton } from '@/components/GoogleLoginButton'
import { Input } from '@/components/Input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { GoogleLogo } from '@phosphor-icons/react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useNavigate } from 'react-router'

export function Login() {
  const navigate = useNavigate()

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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-medium">Faça login</h1>
      <form className="p-5 space-y-4">
        <span className="font-light">Usuário</span>
        <Input textPlaceholder="seuemail@email.com" />
        <span className="font-light">Senha</span>
        <Input textPlaceholder="******************" />
        <div className="flex items-center gap-x-2">
          <Checkbox className={'border-black  '} />
          <span className="font-light">Manter-me conectado</span>
        </div>
        <div>
          Esqueceu sua senha?{' '}
          <a href="#" className="underline underline-offset-2">
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
    </div>
  )
}
