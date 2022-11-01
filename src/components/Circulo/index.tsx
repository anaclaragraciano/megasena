import { HTMLAttributes } from "react";
import { DezenaSld, SorteioSld } from "./styles";


type Props = HTMLAttributes <HTMLElement>&{
    listaDezenas: string [];
    
}

export function Circulo({listaDezenas}:Props){
    return <SorteioSld>
        {listaDezenas?.map(dezena =>(
            <DezenaSld key={dezena}>{dezena}</DezenaSld>
        ))}
    </SorteioSld>;
}