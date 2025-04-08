import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

export function App() {
  return (
    <div className="bg-[url(./assets/background-image.png)] bg-no-repeat bg-cover text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
