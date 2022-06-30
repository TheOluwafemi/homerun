import './App.css'
import Navbar from "./components/navbar/nav-bar"
import Hero from "./components/hero/hero"
import { Container } from '@chakra-ui/react'
import AppSkeleton from './components/app-skeleton/app-skeleton'
import Organize from './components/organize-section/organize'
import Collaborate from './components/collaborate-section/collaborate'
import Connect from './components/connect-section/connect'
import TrailBanner from './components/trial-banner/trial-banner'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className='app-container' maxW='container.xl'>
        <Hero />
        <AppSkeleton />
        <Organize />
        <Collaborate />
        <Connect />
        <TrailBanner/>
      </Container>

    </div>
  )
}

export default App
