import styled from 'styled-components'
import Pesquisa from '../components/Pesquisa'
import UltimosLacamentos from '../components/UltimosLancamentos'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  `

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLacamentos />
    </AppContainer>
  );
}

export default Home;
