import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    
    bodyBackground: string,
    ciculoColor: string,
    acumuladoColor: string,
    concursoColor: string,
    resultadoColor: string,
    sorteioColor: string, 
    dataColor: string,
    valorestimadoColor: string,
    localColor: string,
}
}