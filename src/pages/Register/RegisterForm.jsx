import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
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
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3 w-full">
          <div className="w-6/12">
            <Input
              type="text"
              name="data_nascimento"
              placeholder="Digite sua data de nascimento"
              value={formData.data_nascimento}
              onChange={handleChange}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="cpf"
              placeholder="Digite seu CPF"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-3 w-full">
          <div className="w-6/12">
            <Input
              type="text"
              name="telefone"
              placeholder="Digite seu telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="crp"
              placeholder="Digite seu CRP"
              value={formData.crp}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Input
            type="text"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-6/12">
            <Input
              type="text"
              name="cep"
              placeholder="Digite seu CEP"
              value={formData.cep}
              onChange={handleChange}
              onBlur={handleChangeBlurCep}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="numero"
              placeholder="Digite o número"
              value={formData.numero}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Input
            type="text"
            name="logradouro"
            placeholder="Digite o logradouro"
            value={formData.logradouro}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-6/12">
            <Input
              type="text"
              name="bairro"
              placeholder="Digite seu bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
          </div>
          <div className="self-end w-6/12">
            <Input
              type="text"
              name="cidade"
              placeholder="Digite sua cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Input
            type="text"
            name="complemento"
            placeholder="Digite o complemento"
            value={formData.complemento}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Input
            type="password"
            name="confirmSenha"
            placeholder="Digite sua senha novamente"
            value={formData.confirmSenha}
            onChange={handleChange}
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
