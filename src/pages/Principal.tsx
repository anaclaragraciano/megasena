import { useEffect, useState } from "react";
import { Acumulado } from "../components/Acumulado";
import { Cabecalho } from "../components/Cabecalho";
import { Circulo } from "../components/Circulo";
import { Concurso } from "../components/Concurso";
import { Local } from "../components/Local";


import services from "../services";
import { Props } from "../types";

export default function Principal() {
    const [concurso,setConcurso] =useState({} as Props);

    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero);
                setConcurso(concurso);
            }
        )()
        },
        []
    );

    

    return ( <>
        <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
        {concurso.acumulado && <Acumulado/>}
        <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio}/>
        <Circulo listaDezenas={concurso.listaDezenas} />
        <Concurso  dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}/> 
        </>
    );

}
