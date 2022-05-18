export interface IResponseIndicadorNombre{
    status:string,
    result: {
        data:INombreInterface[]
    },
    message?: string;
}


export interface INombreInterface{
    nombre_largo_Indicador_Especifico:string
}

export interface ICodigoIndicador{
    indicador:string
}
