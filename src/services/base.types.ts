export interface IBaseResponse<T> {
    data: T;
    error: any;
    message: string;
    status: boolean;
} 