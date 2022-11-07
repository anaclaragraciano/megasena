import styled from 'styled-components';

export const WrapperSld = styled.div` //a variavel recebe uma .div a direita do ponto smp tem uma tag htlm
    border-bottom: 1px solid #bbb;
    display: flex; //do tipo flex box
    padding: 10px 0px;
`;

export const ResultadoSld = styled.div` //css puro
    font-size: 30px;
    color: ${props => props.theme.resultadoColor};
    font-weight: bold;
    align-items: flex-end;
`;

export const ConcursoSld = styled.div` //css puro
    font-size: 20px;
    color: ${props => props.theme.concursoColor};
    display: flex;
    align-items: flex-end;
    padding-bottom:3px;
    margin-left: 15px;
`;
