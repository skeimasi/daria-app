import apiClient from "@/configs/axios/axios.interceptor";
import { EndPoints } from "@/configs/constants/EndPoints";
import { IGetUsersResponse } from "./users.types";

export const fetchUserApi = async () => {
    const r = await apiClient.get<IGetUsersResponse>(
        EndPoints.usersUrls,
    )
    return r.data;
}