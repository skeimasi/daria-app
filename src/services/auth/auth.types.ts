import { IBaseResponse } from "../base.types";

export interface ILoginBody {
    username: string;
    password: string;
}

export type FakeUserModel = {
  username: string;
  token: string;
};

export type IRegisterBody = ILoginBody;

export interface ILoginResponseObject {
  token: string;
}

export interface IRegisterResponseObject {
}

export type ILoginResponse =  IBaseResponse<ILoginResponseObject>
export type IRegisterResponse =  IBaseResponse<IRegisterResponseObject>