import styled from 'styled-components'
import Request from '../components/Request'
import {getData} from '../firebase/firestore'

function Home() {
  return (
    <Container>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
      <Request/>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  display:flex;
  flex-wrap: wrap;
` 

export default Home