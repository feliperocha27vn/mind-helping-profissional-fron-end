import { useNavigate } from 'react-router'
import imagemPrincipalInicio from '../assets/imagem-principal-inicio.png'
import imagemProfissional from '../assets/profissional-image.png'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Footer } from './Footer'

import { motion } from 'framer-motion'
import { Button } from './ui/button'

export function Main() {
  const perguntasFrequentes = [
    {
      id: 1,
      title: 'Quem pode se cadastrar na plataforma?',
      content: `Nossa plataforma está aberta para todos os profissionais de saúde
            mental registrados e ativos, incluindo psicólogos, psiquiatras,
            terapeutas ocupacionais e outros profissionais da área. Se você
            possui um CRM válido e busca impactar positivamente a vida de
            pessoas em todo o Brasil, convidamos você a se juntar à nossa rede.`,
    },
    {
      id: 2,
      title: 'Como funciona o processo de seleção?',
      content:
        'Nosso processo de seleção é simples e ágil. Solicitamos apenas a verificação do seu CRM para garantir a segurança e a confiança dos nossos pacientes. Após a verificação, você poderá criar seu perfil na plataforma e começar a atender pacientes de todo o Brasil.',
    },
    {
      id: 3,
      title: 'Quais os benefícios de ser um profissional parceiro?',
      content: `Flexibilidade: Defina seus próprios horários e atenda pacientes de acordo com sua disponibilidade.
                Ampla rede de pacientes: Conecte-se com pessoas de diferentes regiões do Brasil e expanda seu alcance profissional.
                Plataforma intuitiva: Utilize ferramentas práticas para agendamento, prontuário e comunicação com pacientes.
                Comunidade engajada: Faça parte de uma rede de profissionais apaixonados pela saúde mental.
                Acesso para todos: Atenda pacientes de diferentes realidades socioeconômicas, incluindo aqueles que buscam atendimento voluntário.`,
    },
    {
      id: 4,
      title: 'Existe algum custo para se cadastrar?',
      content:
        'Não, o cadastro na plataforma é totalmente gratuito para profissionais de saúde mental.',
    },
    {
      id: 5,
      title: 'Posso atuar como voluntário na plataforma?',
      content:
        'Sim! Acreditamos que a saúde mental deve ser acessível a todos. Se você deseja oferecer seus serviços de forma voluntária, nossa plataforma é o lugar certo.',
    },
    {
      id: 6,
      title: 'Como a plataforma garante a segurança dos dados dos pacientes?',
      content:
        'Priorizamos a segurança e a privacidade dos dados dos nossos pacientes. Nossa plataforma utiliza tecnologia de ponta para proteger as informações e garantir um ambiente seguro para o atendimento online.',
    },
  ]

  const navigate = useNavigate()

  function handleNavigateRegister() {
    navigate('/cadastro-profissional')
  }

  return (
    <div className="flex flex-col w-full items-center-safe px-8 xl:px-0">
      <motion.div
        className="flex flex-col items-center justify-center w-full md:flex-row md:gap-x-12 xl:gap-x-20 xl:h-[40rem]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={imagemPrincipalInicio}
          alt="Imagem que mostra nosso aplicativo no celular"
          className="xl:h-[32rem]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
        <div className="md:w-5/12 xl:w-6/12">
          <h1 className="text-2xl mt-5 font-medium text-start w-full xl:text-6xl">
            Sobre nós
          </h1>
          <p className="text-base mt-1.5 font-light xl:text-2xl">
            Nosso aplicativo leva a saúde mental para todos os cantos do Brasil,
            deve ser acessível a todos. Buscamos profissionais comprometidos com
            a missão de tornar o cuidado emocional acessível a todos. Junte-se a
            nós e faça parte de uma comunidade que transforma vidas através da
            saúde mental.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center w-full md:flex-row">
        {/* mobile */}
        <div className="md:hidden">
          <h1 className="text-2xl mt-5 font-medium text-start w-full">
            Trabalhe conosco
          </h1>
          <img
            src={imagemProfissional}
            alt="Imagem de exemplo de um profissional"
            className="mt-2.5"
          />
        </div>
        <motion.div
          className="md:w-80 lg:w-full md:flex md:justify-center md:items-center md:gap-x-16 xl:gap-x-20 xl:h-[40rem]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:w-5/12 xl:w-6/12">
            <h1 className="hidden md:block text-2xl mt-5 font-medium text-start w-full xl:text-6xl">
              Trabalhe conosco
            </h1>
            <p className="font-light mt-2.5 xl:text-2xl">
              Nosso aplicativo leva a saúde mental para todos os cantos do
              Brasil, deve ser acessível a todos. Buscamos profissionais
              comprometidos com a missão de tornar o cuidado emocional acessível
              a todos.
            </p>
            <p className="font-medium xl:text-2xl">
              Junte-se a nós e faça parte de uma comunidade que transforma vidas
              através da saúde mental.
            </p>
            <div className="w-full flex justify-center mt-10">
              <Button
                type="button"
                className="text-2xl px-8 py-6 bg-zinc-900 rounded-4xl w-80  cursor-pointer"
                onClick={handleNavigateRegister}
              >
                JUNTE-SE A NÓS
              </Button>
            </div>
          </div>
          <img
            src={imagemProfissional}
            alt="Imagem de exemplo de um profissional"
            className="mt-2.5 hidden md:block xl:h-[32rem]"
          />
        </motion.div>
      </div>
      <div className="w-full xl:w-9/12">
        <h1 className="w-full pl-3 text-2xl mt-10 font-medium text-start">
          Perguntas frequentes
        </h1>
        <Accordion type="single" collapsible className="w-full px-3 mt-2.5">
          {perguntasFrequentes.map(item => {
            return (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
        <Footer />
      </div>
    </div>
  )
}
