import { Route, Routes } from 'react-router'
import { Wrapper } from '@layout/Wrapper'
import { Header } from '@layout/Header'
import { Navigation } from '@layout/Navigation'
import { Footer } from '@layout/Footer'
import { Home } from '@pages/Home'
import { About } from '@pages/About'
import { Work } from '@pages/Work'

function App() {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />{' '}
      </Routes>
      <Footer />
    </Wrapper>
  )
}

export default App
