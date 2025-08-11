import { QueryKeys } from "@/configs/constants/QueryKeys";
import { useQuery } from "@tanstack/react-query";
import { fetchUserApi } from "./users.services";

export const useGetUsers = () => {
    const q = useQuery({
        queryFn: fetchUserApi,
        queryKey: [QueryKeys.userList],
        select(data) {
            return data.map(({ address, id, ...rest }) => ({
                id,
                key: id,
                ...rest,
                address,
                fixedAddress: `${address.city} / ${address.street} / ${address.suite}`
            }))
        },
    });

    return {
        ...q,
        userList: q.data || [],
        fetchingUserList: q.isLoading,
    }
}