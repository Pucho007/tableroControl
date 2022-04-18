export interface IFiltro{
    type:string,
    data:IFiltroSelect[]
}
export interface IFiltroSelect{
    title:string,
    data:IDataFiltroSelect[],
    selectedItem:string
}

export interface IDataFiltroSelect{
    name:string,
    value:string
}