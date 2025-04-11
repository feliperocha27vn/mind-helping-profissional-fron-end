import { Checkbox } from '@/components/ui/checkbox'
import { Input } from './Input'

export function Register() {
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="w-full flex flex-col items-center p-6">
        <h1 className="text-3xl w-7/12 text-center">
          Cadastro de Profissional
        </h1>
        <div className="mt-10 w-full space-y-5">
          <div className="space-y-1">
            <p className="font-light">Nome</p>
            <Input type="text" name="nome" />
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <p>Data de Nascimento</p>
              <Input type="text" name="data_nascimento" />
            </div>
            <div className="self-end">
              <p>CPF</p>
              <Input type="text" name="cpf" />
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <p>Telefone</p>
              <Input type="text" name="telefone" />
            </div>
            <div className="self-end">
              <p>CRP</p>
              <Input type="text" name="crp" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-light">E-mail</p>
            <Input type="text" name="email" />
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <p>CEP</p>
              <Input type="text" name="cep" />
            </div>
            <div className="self-end">
              <p>Número</p>
              <Input type="text" name="numero" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-light">Logradouro</p>
            <Input type="text" name="logradouro" />
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <p>Bairro</p>
              <Input type="text" name="bairro" />
            </div>
            <div className="self-end">
              <p>Cidade</p>
              <Input type="text" name="cidade" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-light">Senha</p>
            <Input type="text" name="senha" />
          </div>
          <div className="space-y-1">
            <p className="font-light">Repita sua senha</p>
            <Input type="text" name="" />
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" className="border-zinc-500" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Profissional social ?
              </label>
              <p className="text-sm text-muted-foreground">
                (Profissional social é aquele que oferece consultas de forma
                gratuita para pessoas de baixa renda)
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
