import { useEffect, useState } from 'react';
import styled from 'styled-components'
import livroImg from '../imagens/livro.png'
import { deleteFavorito, getFavoritos } from '../Servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
  `
const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Resultado = styled.div`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  p {
      width: 200px;
      color: #FFF;
  }
  img {
      width: 180px;
  }
  &:hover {
      border: 1px solid white;
  }
`

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const response = await getFavoritos()
    setFavoritos(response)
  }

  async function deletaFavorito(id) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Você deletou o livro de id: ${id}`)
  }
  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.map(favorito => (
              <Resultado onClick={() => deletaFavorito(favorito.id)}>
                <img src={livroImg} />
                <p>{favorito.nome}</p>
              </Resultado>
            ))
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
