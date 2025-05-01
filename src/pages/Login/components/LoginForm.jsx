import { GoogleLoginButton } from '@/components/GoogleLoginButton'
import { Input } from '@/components/Input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { motion } from 'framer-motion'

export function LoginForm() {
  function handleNoRegistration() {
    navigate('/cadastro-profissional')
  }

  return (
    <motion.form
      className="p-5 lg:ml-4 md:py-20 md:px-10 md:rounded-2xl space-y-4 bg-white w-full max-w-[40rem] lg:w-[32rem] xl:shadow-2xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="text-2xl font-medium lg:mb-4">LOGIN</h1>
      <span className="font-light">Usuário</span>
      <Input className={'border-zinc-400'} />
      <span className="font-light">Senha</span>
      <Input className={'border-zinc-400'} type="password" />
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
    </motion.form>
  )
}
