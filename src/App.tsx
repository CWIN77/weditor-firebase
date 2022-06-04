import styled from 'styled-components' 
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'

function App() {
  return (
    <Container>
      
      <Routes>
        <Route path="/" element={<><Navbar/><Home/></>} />
        <Route path="/save" element={<><Navbar/><Home/></>} />
        <Route path="/result" element={<><Navbar/><Home/></>} />
        <Route path="/thumbnail" element={<><Navbar/><Home/></>} />
        <Route path="/request/:id" element={<Detail/>} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  min-height:100vh;
`

export default App
