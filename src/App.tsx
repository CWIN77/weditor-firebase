import styled from 'styled-components' 
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const Container = styled.div`
  width:100%;
  min-height:100vh;
` 

function App() {
  return (
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Container>
  )
}

export default App
