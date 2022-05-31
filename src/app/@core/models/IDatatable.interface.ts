
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
    meta_total?:number[],
    avance_total?:number[],
    //numerador_total?:number,
    //denominador_total?:number,
    meta_enero?:number[],
    avance_enero?:number[],
    //numerador_enero?:number,
    //denominador_enero?:number,
    meta_febrero?:number[],
    avance_febrero?:number[],
    //numerador_febrero?:number,
    //denominador_febrero?:number,
    meta_marzo?:number[],
    avance_marzo?:number[],
    //numerador_marzo?:number,
    //denominador_marzo?:number,
    meta_abril?:number[],
    avance_abril?:number[],
    //numerador_abril?:number,
    //denominador_abril?:number,
    meta_mayo?:number[],
    avance_mayo?:number[],
    //numerador_mayo?:number,
    //denominador_mayo?:number,
    meta_junio?:number[],
    avance_junio?:number[],
    //numerador_junio?:number,
    //denominador_junio?:number,
    meta_julio?:number[],
    avance_julio?:number[],
    //numerador_julio?:number,
    //denominador_julio?:number,
    meta_agosto?:number[],
    avance_agosto?:number[],
    //numerador_agosto?:number,
    //denominador_agosto?:number,
    meta_septiembre?:number[],
    avance_septiembre?:number[],
    //numerador_septiembre?:number,
    //denominador_septiembre?:number,
    meta_octubre?:number[],
    avance_octubre?:number[],
    //numerador_octubre?:number,
    //denominador_octubre?:number,
    meta_noviembre?:number[],
    avance_noviembre?:number[],
    //numerador_noviembre?:number,
    //denominador_noviembre?:number,
    porcentaje_noviembre?:string,
    meta_diciembre?:number[],
    avance_diciembre?:number[],
    //numerador_diciembre?:number,
    //denominador_diciembre?:number,
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