import { useEffect, useState } from "react";
import { Acumulado } from "../components/Acumulado";
import { Cabecalho } from "../components/Cabecalho";
import { Circulo } from "../components/Circulo";
import { Concurso } from "../components/Concurso";
import { Local } from "../components/Local";
import { ThemeProvider } from "styled-components";
import {WrapperSld} from "./styles";
import services from "../services";
import { Props } from "../types";
import {dark,light} from "../styles/theme";



export default function Principal() {
    const [concurso,setConcurso] =useState({} as Props);
    const [tema,SetTema] = useState (dark);


    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero);
                setConcurso(concurso);
                SetTema( parseInt(concurso.listaDezenas[0])%2 ===0 ? light:dark);
            }
        )()
        },
        []
    );

    

   return (
    <>
    {concurso.numero &&
        <>
        <ThemeProvider theme ={tema}> 
            <WrapperSld>
                <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
                {concurso.acumulado && <Acumulado/>}
                <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio}/>
                <Circulo listaDezenas={concurso.listaDezenas} />
                <Concurso  dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}/>
            </WrapperSld>
        </ThemeProvider> 
        </>
    }
    </>

   )


}