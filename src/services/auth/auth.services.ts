import apiClient from "@/configs/axios/axios.interceptor";
import { ILoginBody } from "./auth.types";
import { EndPoints } from "@/configs/constants/EndPoints";

export const loginApi = async (body: ILoginBody) => {
    const r = await apiClient.post(
        EndPoints.auth.login,
        { ...body }
    )
    return r.data;
}