import styled from 'styled-components';

export const BordaSld = styled.div`
    border-bottom: 1px solid #bbb;
    display: flex;
    padding: 10px 0px;
`;

export const DataSld = styled.div`
    font-size: .9rem;
    color: ${props => props.theme.cinza};
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;
    margin-left: 10px;
`;

export const ValorestimadoSld = styled.div`
    font-size:  2.2rem;
    color: ${props => props.theme.color};
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;
    margin-left: 10px;
`;