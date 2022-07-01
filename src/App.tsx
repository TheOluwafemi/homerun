import './App.css'
import Navbar from "./components/navbar/nav-bar"
import Hero from "./components/hero/hero"
import { Container } from '@chakra-ui/react'
import AppSkeleton from './components/app-skeleton/app-skeleton'
import Organize from './components/organize-section/organize'
import Collaborate from './components/collaborate-section/collaborate'
import Connect from './components/connect-section/connect'
import TrialBanner from './components/trial-banner/trial-banner'
import More from './components/more-section/more'
import StartFree from './components/start-free/start-free'

function App() {
  return (
    <main className="App">
      <Navbar />
      <Container className='app-container' maxW='container.xl'>
        <Hero />
        <AppSkeleton />
        <Organize />
        <Collaborate />
        <Connect />
      </Container>

      <Container className='app-container' maxW='1440px'>
        <TrialBanner />
        <More />
        <StartFree />
      </Container>
    </main>
  )
}

export default App
