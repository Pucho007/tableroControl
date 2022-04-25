export interface IResponseAuth {
    status:string,
    result: {
        user:IUser,
        token:string
    },
    message?: string;
}

export interface IUser {
    id:        number;
    username:       string;
    password:   string;
    rol:       string;
}