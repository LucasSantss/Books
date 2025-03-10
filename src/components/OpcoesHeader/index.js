import styled from 'styled-components'

const Opcao = styled.li`
    display: flex;
    min-width: 120px;
    font-size: 16px;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const Opcoes = styled.ul`
display: flex;
`
const textoOpcoes = ['CATEGORITAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao> <p> {texto} </p> </Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader