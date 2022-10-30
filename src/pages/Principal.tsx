import { useEffect, useState } from "react";
import { Cabecalho } from "../components/Cabecalho";
import { Circulo } from "../components/Circulo";


import services from "../services";
import { Props } from "../types";

export default function Principal() {

    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero);
                console.log(concurso)
                const dataApuracao:  Props = await services.get(numero);
                const localSorteio:  Props = await services.get(numero);
                const nomeMunicipioUFSorteio:  Props = await services.get(numero);
                const acumulado:  Props = await services.get(numero);
                const listaDezenas:  Props = await services.get(numero);
            }
        )()
        },
        []
    );

    

    return ( 

        
        <Circulo> value ={listaDezenas}</Circulo>
    ) ;

}
