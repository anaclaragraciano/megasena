import { HTMLAttributes } from "react";
import { ValorestimadoSld, DataSld, BordaSld } from "./styles";

type Props = HTMLAttributes <HTMLElement>&{
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
}

export function Concurso({dataProximoConcurso, valorEstimadoProximoConcurso}:Props){
    console.log(dataProximoConcurso, valorEstimadoProximoConcurso);
    return (
            <BordaSld>
            <DataSld>Estimativa de prêmio do próximo concurso {dataProximoConcurso}</DataSld> 
            <ValorestimadoSld>R${valorEstimadoProximoConcurso}</ValorestimadoSld>
            </BordaSld>
        
    )
}