import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/Input'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function RegisterForm() {
  const [formData, setFormData] = useState({
    nome: '',
    data_nascimento: '',
    cpf: '',
    telefone: '',
    crp: '',
    email: '',
    cep: '',
    numero: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    complemento: '',
    senha: '',
    confirmSenha: '',
    isProfissionalSocial: false,
    acceptTerms: false,
  })

  function handleChangeBlurCep(event) {
    const cepValue = event.target.value.replace(/\D/g, '')
    setFormData(prev => ({ ...prev, cep: cepValue }))
  }

  useEffect(() => {
    if (formData.cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${formData.cep}/json/`)
        .then(response => {
          setFormData(prev => ({
            ...prev,
            logradouro: response.data.logradouro || '',
            bairro: response.data.bairro || '',
            cidade: response.data.localidade || '',
          }))
        })
        .catch(err => {
          console.error('Erro ao buscar dados do CEP:', err)
        })
    }
  }, [formData.cep])

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <motion.form
      className="lg:w-5/12 flex flex-col items-center px-2 lg:px-6 lg:py-3 max-w-2xl bg-slate-100 lg:rounded-2xl lg:shadow-2xl text-black"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="mt-10 w-full space-y-5 lg:space-y-3">
        <h1 className="text-2xl w-7/12 lg:w-10/12 mb-4">REGISTRO</h1>
        <div className="space-y-1 w-full">
          <Input
            type="text"
            name="nome"
            textPlaceholder="Digite seu nome"
            inputValue={formData.nome}
            onHandlerChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3 w-full">
          <div className="w-6/12">
            <Input
              type="text"
              name="data_nascimento"
              textPlaceholder="Digite sua data de nascimento"
              inputValue={formData.data_nascimento}
              onHandlerChange={handleChange}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="cpf"
              textPlaceholder="Digite seu CPF"
              inputValue={formData.cpf}
              onHandlerChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-3 w-full">
          <div className="w-6/12">
            <Input
              type="text"
              name="telefone"
              textPlaceholder="Digite seu telefone"
              inputValue={formData.telefone}
              onHandlerChange={handleChange}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="crp"
              textPlaceholder="Digite seu CRP"
              inputValue={formData.crp}
              onHandlerChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Input
            type="text"
            name="email"
            textPlaceholder="Digite seu email"
            inputValue={formData.email}
            onHandlerChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-6/12">
            <Input
              type="text"
              name="cep"
              textPlaceholder="Digite seu CEP"
              inputValue={formData.cep}
              onHandlerChange={handleChange}
              onBlur={handleChangeBlurCep}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="numero"
              textPlaceholder="Digite o número"
              inputValue={formData.numero}
              onHandlerChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Input
            type="text"
            name="logradouro"
            textPlaceholder="Digite o logradouro"
            inputValue={formData.logradouro}
            onHandlerChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-6/12">
            <Input
              type="text"
              name="bairro"
              textPlaceholder="Digite seu bairro"
              inputValue={formData.bairro}
              onHandlerChange={handleChange}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="cidade"
              textPlaceholder="Digite sua cidade"
              inputValue={formData.cidade}
              onHandlerChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Input
            type="text"
            name="complemento"
            textPlaceholder="Digite o complemento"
            inputValue={formData.complemento}
            onHandlerChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Input
            type="password"
            name="senha"
            textPlaceholder="Digite sua senha"
            inputValue={formData.senha}
            onHandlerChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Input
            type="password"
            name="confirmSenha"
            textPlaceholder="Digite sua senha novamente"
            inputValue={formData.confirmSenha}
            onHandlerChange={handleChange}
          />
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox
            id="isProfissionalSocial"
            name="isProfissionalSocial"
            checked={formData.isProfissionalSocial}
            onCheckedChange={checked =>
              setFormData(prev => ({ ...prev, isProfissionalSocial: checked }))
            }
            className="border-zinc-500"
          />
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
        <div className="items-top flex space-x-2">
          <Checkbox
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onCheckedChange={checked =>
              setFormData(prev => ({ ...prev, acceptTerms: checked }))
            }
            className="border-zinc-500"
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 underline"
            >
              Li e aceito os termos de condição
            </label>
          </div>
        </div>
      </div>
      <Button className={'mt-10 py-6 px-5'}>Cadastrar</Button>
    </motion.form>
  )
}
