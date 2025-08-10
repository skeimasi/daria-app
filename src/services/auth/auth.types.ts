export interface ILoginBody {
    username: string;
    password: string;
}

export type IRegisterBody = ILoginBody;

export interface ILoginResponse { }
export interface IRegisterResponse { }