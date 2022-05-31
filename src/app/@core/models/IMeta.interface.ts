
export interface IResponseIndicadorMeta{
    status:string,
    result: {
        data:IMetaIndicador[]
    },
    message?: string;
}


export interface IMetaIndicador{
    meta:string
}