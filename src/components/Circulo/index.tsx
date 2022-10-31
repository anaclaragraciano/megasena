import { HTMLAttributes } from "react";
import { CirculoSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    listaDezenas: string[]
}

export function Circulo({listaDezenas}: Props){ //precisamos tipar o objeto
    return (
    <CirculoSld> {listaDezenas} </CirculoSld>
    );
}
