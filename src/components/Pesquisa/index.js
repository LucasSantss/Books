import Input from "../Input"
import styled from "styled-components"
import livroImg from '../../imagens/livro.png'
import { useEffect, useState } from "react"
import { getLivros } from "../../Servicos/livros"
import { postFavorito } from "../../Servicos/favoritos"

const PesquisaContainer = styled.section`
        background-image: linear-gradient( #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        
`
const Titulo = styled.h2`
        background-image: linear-gradient(180deg, #002F52 35%, #326589);
        padding-bottom: 5px;
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
        margin: 0px;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
`
const Resultado = styled.div`
    display: inline-table;
    margin: 15px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 180px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    async function insereFavorito(id) {
        await postFavorito(id)
        alert(`O livro de id: ${id} foi inserido com sucesso`)
    }
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?
                <Subtitulo>Encontre seu liveo em nossa estante.</Subtitulo>
                <Input placeholder="Escreva sua próxima leitura"
                    onChange={evento => {
                        const textoDigitado = evento.target.value
                        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                        setLivrosPesquisados(resultadoPesquisa)
                    }} />
            </Titulo>
            {livrosPesquisados.map(livro => (
                <Resultado onClick={() => insereFavorito(livro.id)}>
                    <img src={livroImg} />
                    <p>{livro.nome}</p>
                    <p>{livro.genero}</p>
                </Resultado>
            ))}

        </PesquisaContainer>
    )
}

export default Pesquisa