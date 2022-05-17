
export interface IResponseIndicadorMeta{
    status:string,
    result: {
        data:IMetaIndicador[]
    },
    message?: string;
}


export interface IMetaIndicador{
    meta_Indicador_Especifico:string
}