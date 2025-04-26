import { GoogleLogo } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { useGoogleLogin } from '@react-oauth/google'
import { useState } from 'react'

export function GoogleLoginButton({ onLoginSuccess }) {
  const [isLoading, setIsLoading] = useState(false)

  // Obtenha o URI atual
  const currentUri = window.location.origin

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      setIsLoading(true)
      try {
        const userInfoResponse = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        )

        const userInfo = await userInfoResponse.json()
        if (onLoginSuccess) {
          onLoginSuccess(userInfo)
        }
      } catch (error) {
        console.error('Erro ao obter informações do usuário:', error)
      } finally {
        setIsLoading(false)
      }
    },
    onError: error => {
      console.error('Login Failed:', error)
      setIsLoading(false)
    },
    flow: 'implicit',
    ux_mode: 'redirect',
    redirect_uri: currentUri, // Especifique explicitamente o URI de redirecionamento
  })

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border-black flex items-center gap-2 justify-center"
      onClick={() => login()}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="animate-spin">⟳</span>
      ) : (
        <GoogleLogo weight="bold" size={24} />
      )}
      <span>{isLoading ? 'Processando...' : 'Login com Google'}</span>
    </Button>
  )
}
