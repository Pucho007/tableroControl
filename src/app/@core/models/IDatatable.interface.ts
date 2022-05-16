
export interface IResponseIndicador{
    status:string,
    result: {
        data:IDataIndicador[]
    },
    message?: string;
}

export interface IDataIndicador{
    Provincia:string,
    Distrito:string,
    Red:string,
    Nombre_Establecimiento:string,
    mes:string,
    numerador:string,
    denominador:string,
    meta_Indicador_Especifico:string
}

export interface HIS{
    //seleccionar fila en la tabla
    select?:boolean,
    //data que necesito
    codigo_establecimiento?:string,
    establecimiento?:string,
    meta_total?:number,
    avance_total?:number,
    porcentaje_total?:string,
    meta_enero?:number,
    avance_enero?:number,
    porcentaje_enero?:string,
    meta_febrero?:number,
    avance_febrero?:number,
    porcentaje_febrero?:string,
    meta_marzo?:number,
    avance_marzo?:number,
    porcentaje_marzo?:string,
    meta_abril?:number,
    avance_abril?:number,
    porcentaje_abril?:string,
    meta_mayo?:number,
    avance_mayo?:number,
    porcentaje_mayo?:string,
    meta_junio?:number,
    avance_junio?:number,
    porcentaje_junio?:string,
    meta_julio?:number,
    avance_julio?:number,
    porcentaje_julio?:string,
    meta_agosto?:number,
    avance_agosto?:number,
    porcentaje_agosto?:string,
    meta_septiembre?:number,
    avance_septiembre?:number,
    porcentaje_septiembre?:string,
    meta_octubre?:number,
    avance_octubre?:number,
    porcentaje_octubre?:string,
    meta_noviembre?:number,
    avance_noviembre?:number,
    porcentaje_noviembre?:string,
    meta_diciembre?:number,
    avance_diciembre?:number,
    porcentaje_diciembre?:string,
}


//#MODELOS PARA EL COMPONENTE table-Action
export interface IDataTableActionComponent {
	title?: string;
	subtitulo?:string;
	headers?: string[];
    subheaders?:string[];
	data?: any[];
	indexDisable?:number[];
    rowBold?:number;
    meta?:number;
}
//#endregion