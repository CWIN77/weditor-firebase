import styled from 'styled-components' 
import Request from '../components/Request'

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
` 

function Home() {
  return (
    <Container>
      <Request/>
      <Request/>
    </Container>
  )
}

export default Home