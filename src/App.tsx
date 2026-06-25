import { Route, Routes } from 'react-router'
import { Wrapper } from '@layout/Wrapper'
import { Header } from '@layout/Header'
import { Navigation } from '@layout/Navigation'
import { Home } from '@pages/Home'

function App() {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Wrapper>
  )
}

export default App
