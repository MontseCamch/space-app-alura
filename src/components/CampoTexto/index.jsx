import styled from "styled-components"
import search from './search.png'
const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const CampoTextoEstilizado = styled.input`
    width: 566px;
    height: 56px;
    padding: 12px 16px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    border-radius: 10px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconoLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado onChange={(evento) => { setFiltro(evento.target.value)}} type="text" placeholder = "Busca una foto" />
            <IconoLupa src={search} alt="ícono de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto