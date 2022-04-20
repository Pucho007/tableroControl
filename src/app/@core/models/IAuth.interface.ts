export interface IResponseAuth {
    user:    User;
    token:   string | null;
    message: string;
}

export interface User {
    id:          number;
    correo:      string;
    contrasenia: string;
    tipo:        string;
}