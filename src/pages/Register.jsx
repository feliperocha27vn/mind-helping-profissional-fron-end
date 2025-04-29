// Components
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/Input'
import { Button } from '@/components/ui/button'
// Libs
import axios from 'axios'
import { motion } from 'framer-motion'
// Hooks
import { useEffect, useState } from 'react'
// Images
import salaProfissional from '../assets/sala-profissional.jpeg'

export function Register() {
  const api = axios
  const [cep, setCep] = useState('')
  const [dataCep, setDataCep] = useState('')

  function handleChangeBlurCep(event) {
    const cepValue = event.target.value.replace(/\D/g, '')
    setCep(cepValue)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (cep.length === 8) {
      api
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          setDataCep(response.data)
        })
        .catch(err => {
          console.error('Erro ao buscar dados do CEP:', err)
        })
    }
  }, [cep])

  function handleChange(event) {
    const { name, value } = event.target
    setDataCep(prevState => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  return (
    <div className=" lg:min-h-screen lg:flex lg:items-center lg:justify-between">
      <div className="flex flex-col items-center justify-center lg:h-full lg:bg-white lg:px-8 lg:w-8/12">
        <form className="w-8/12 flex flex-col items-center p-6 max-w-2xl">
          <div className="mt-10 w-full space-y-3">
            <h1 className="text-2xl w-7/12 lg:w-10/12 mb-14">REGISTRO</h1>
            <div className="space-y-1 w-full">
              <p className="font-light">Nome</p>
              <Input type="text" name="nome" />
            </div>
            <div className="flex items-center gap-x-3 w-full">
              <div className="w-6/12">
                <p className="font-light">Data de Nascimento</p>
                <Input type="text" name="data_nascimento" />
              </div>
              <div className="self-end w-6/12">
                <p className="font-light">CPF</p>
                <Input type="text" name="cpf" />
              </div>
            </div>
            <div className="flex items-center gap-x-3 w-full">
              <div className="w-6/12">
                <p className="font-light">Telefone</p>
                <Input type="text" name="telefone" />
              </div>
              <div className="self-end w-6/12">
                <p className="font-light">CRP</p>
                <Input type="text" name="crp" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-light">E-mail</p>
              <Input type="text" name="email" />
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-6/12">
                <p className="font-light">CEP</p>
                <Input
                  type="text"
                  name="cep"
                  onHandlerBlur={handleChangeBlurCep}
                />
              </div>
              <div className="self-end w-6/12">
                <p className="font-light">Número</p>
                <Input type="text" name="numero" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-light">Logradouro</p>
              <Input
                type="text"
                name="logradouro"
                inputValue={dataCep.logradouro}
                onHandlerChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-x-3">
              <div className="w-6/12">
                <p className="font-light">Bairro</p>
                <Input
                  type="text"
                  name="bairro"
                  inputValue={dataCep.bairro}
                  onHandlerChange={handleChange}
                />
              </div>
              <div className="self-end w-6/12">
                <p className="font-light">Cidade</p>
                <Input
                  type="text"
                  name="cidade"
                  inputValue={dataCep.localidade}
                  onHandlerChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-light">Complemento</p>
              <Input
                type="text"
                name="complemento"
                onHandlerChange={handleChange}
              />
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
            <div className="items-top flex space-x-2">
              <Checkbox id="terms2" className="border-zinc-500" />
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
        </form>
      </div>
      <motion.img
        src={salaProfissional}
        alt="Sala Profissional"
        className="m-10 rounded-2xl w-5/12"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  )
}
