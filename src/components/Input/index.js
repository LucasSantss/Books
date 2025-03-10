import styled from "styled-components"

const Input = styled.input`
        display: list-item;
        justify-self: center;
        text-align: center;
        border: 1px solid #FFF;
        background: transparent;
        padding: 10px 100px;
        border-radius: 50px;
        width: 200px;
        color: #FFF;
        font-size: 16px;
        margin-bottom: 10px;

        &::placeholder {
                color: #FFF;
                font-size: 16px;
                opacity: 0.45;
        }
`

export default Input