export interface IFiltro{
    type:string,
    title:string,
    selectedItem:string,
    data:IDataFiltroSelect[],
}

export interface IDataFiltroSelect{
    name:string,
    value:string
}

export interface IFiltroIndicador{
    indicador:string,
    annio:string
}