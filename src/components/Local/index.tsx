import { HTMLAttributes } from "react";
import { LocalSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    localSorteio: string,
    nomeMunicipioUFSorteio: string,
}

export function Local({localSorteio, nomeMunicipioUFSorteio}: Props){ //precisamos tipar o objeto
    return (
    <LocalSld> 
        Sorteio realizado no {localSorteio} em {nomeMunicipioUFSorteio}
    </LocalSld>
    );
}