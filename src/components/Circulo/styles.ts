import styled from "styled-components";

export const SorteioSld = styled.div`
    font-size:20px;
    color: ${props => props.theme.sorteioColor};
`

export const DezenaSld = styled.div`
        height: 40px;
        width: 40px;
        background: ${props => props.theme.ciculoColor};
        border-radius: 50%;
        align-items: center;
        display: inline-flex;
        justify-content: center;
        margin: 5px;
`